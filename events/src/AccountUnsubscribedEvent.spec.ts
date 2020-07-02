import { v4 as uuid } from 'uuid'
import { AccountUnsubscribedEvent } from './AccountUnsubscribedEvent'
import { transformAndValidate } from 'class-transformer-validator'

function createValidEvent (): AccountUnsubscribedEvent {
  return {
    version: '0',
    id: uuid(),
    'detail-type': 'Account unsubscribed',
    source: 'componently.vendor',
    time: '2020-06-01T18:19:00Z',
    detail: {
      userId: uuid()
    }
  }
}

describe('AccountUnsubscribedEvent', () => {
  describe('interface', () => {
    it('accepts a valid event', () => {
      const event: AccountUnsubscribedEvent = createValidEvent()
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
      expect(await transformAndValidate(AccountUnsubscribedEvent, createValidEvent())).toBeDefined()
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
