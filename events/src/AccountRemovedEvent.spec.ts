import { v4 as uuid } from 'uuid'
import { AccountRemovedEvent } from './AccountRemovedEvent'
import { transformAndValidate } from 'class-transformer-validator'

function createValidEvent (): AccountRemovedEvent {
  return {
    version: '0',
    id: uuid(),
    'detail-type': 'Account removed',
    source: 'componently.vendor',
    time: '2020-06-01T18:19:00Z',
    detail: {
      userId: uuid()
    }
  }
}

describe('AccountRemovedEvent', () => {
  describe('interface', () => {
    it('accepts a valid event', () => {
      const event: AccountRemovedEvent = createValidEvent()
    })

    it('rejects an event with missing detail', () => {
      // @ts-expect-error
      const event: AccountRemovedEvent = {
        version: '0',
        id: uuid(),
        'detail-type': 'Account removed',
        source: 'componently.vendor',
        time: '2020-06-01T18:19:00Z'
      }
    })
  })

  describe('validator', () => {
    it('accepts a valid event', async () => {
      expect(await transformAndValidate(AccountRemovedEvent, createValidEvent())).toBeDefined()
    })

    it('rejects an event with missing detail', async () => {
      await expect(transformAndValidate(AccountRemovedEvent, {
        version: '0',
        id: uuid(),
        'detail-type': 'Account request',
        source: 'componently.vendor',
        time: '2020-06-01T18:19:00Z'
      })).rejects.toBeDefined()
    })
  })
})
