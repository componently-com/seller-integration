import { v4 as uuid } from 'uuid'
import { AccountUnsubscribedEvent, createExampleAccountUnsubscribedEvent } from './AccountUnsubscribedEvent'
import { transformAndValidate } from 'class-transformer-validator'

describe('AccountUnsubscribedEvent', () => {
  describe('interface', () => {
    it('accepts a valid event', () => {
      const event: AccountUnsubscribedEvent = createExampleAccountUnsubscribedEvent()
    })

    it('rejects an event with missing detail', () => {
      // @ts-expect-error
      const event: AccountUnsubscribedEvent = {
        version: '0',
        id: uuid(),
        'detail-type': 'Account unsubscribed',
        source: 'componently.vendor',
        time: '2020-06-01T18:19:00Z'
      }
    })
  })

  describe('validator', () => {
    it('accepts a valid event', async () => {
      expect(await transformAndValidate(AccountUnsubscribedEvent, createExampleAccountUnsubscribedEvent())).toBeDefined()
    })

    it('rejects an event with missing detail', async () => {
      await expect(transformAndValidate(AccountUnsubscribedEvent, {
        version: '0',
        id: uuid(),
        'detail-type': 'Account unsubscribed',
        source: 'componently.vendor',
        time: '2020-06-01T18:19:00Z'
      })).rejects.toBeDefined()
    })
  })
})
