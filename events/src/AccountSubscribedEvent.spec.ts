import { v4 as uuid } from 'uuid'
import { AccountSubscribedEvent, createExampleAccountSubscribedEvent } from './AccountSubscribedEvent'
import { transformAndValidate } from 'class-transformer-validator'

describe('AccountSubscribedEvent', () => {
  describe('interface', () => {
    it('accepts a valid event', () => {
      const event: AccountSubscribedEvent = createExampleAccountSubscribedEvent()
    })

    it('rejects an event with missing detail', () => {
      // @ts-expect-error
      const event: AccountSubscribedEvent = {
        version: '0',
        id: uuid(),
        'detail-type': 'Account subscribed',
        source: 'componently.vendor',
        time: '2020-06-01T18:19:00Z'
      }
    })
  })

  describe('validator', () => {
    it('accepts a valid event', async () => {
      expect(await transformAndValidate(AccountSubscribedEvent, createExampleAccountSubscribedEvent())).toBeDefined()
    })

    it('rejects an event with missing detail', async () => {
      await expect(transformAndValidate(AccountSubscribedEvent, {
        version: '0',
        id: uuid(),
        'detail-type': 'Account subscribed',
        source: 'componently.vendor',
        time: '2020-06-01T18:19:00Z'
      })).rejects.toBeDefined()
    })
  })
})
