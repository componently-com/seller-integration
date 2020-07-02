import { v4 as uuid } from 'uuid'
import { AccountSubscribedEvent } from './AccountSubscribedEvent'
import { transformAndValidate } from 'class-transformer-validator'

function createValidEvent (): AccountSubscribedEvent {
  return {
    version: '0',
    id: uuid(),
    'detail-type': 'Account subscribed',
    source: 'componently.vendor',
    time: '2020-06-01T18:19:00Z',
    detail: {
      userId: uuid(),
      subscriptionId: uuid()
    }
  }
}

describe('AccountSubscribedEvent', () => {
  describe('interface', () => {
    it('accepts a valid event', () => {
      const event: AccountSubscribedEvent = createValidEvent()
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
      expect(await transformAndValidate(AccountSubscribedEvent, createValidEvent())).toBeDefined()
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
