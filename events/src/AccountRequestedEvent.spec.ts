import { v4 as uuid } from 'uuid'
import { AccountRequestedEvent } from './AccountRequestedEvent'
import { transformAndValidate } from 'class-transformer-validator'

function createValidEvent (): AccountRequestedEvent {
  return {
    version: '0',
    id: uuid(),
    'detail-type': 'Account request',
    source: 'componently.vendor',
    time: '2020-06-01T18:19:00Z',
    detail: {
      userId: uuid(),
      email: 'test.user@componently.com',
      firstName: 'Test',
      lastName: 'User',
      password: 'Y1BsNWCEBZ9Est5Od3r^'
    }
  }
}

describe('AccountRequestedEvent', () => {
  describe('interface', () => {
    it('accepts a valid event', () => {
      const event: AccountRequestedEvent = createValidEvent()
    })

    it('rejects an event with missing detail', () => {
      // @ts-expect-error
      const event: AccountRequestedEvent = {
        version: '0',
        id: uuid(),
        'detail-type': 'Account request',
        source: 'componently.vendor',
        time: '2020-06-01T18:19:00Z'
      }
    })
  })

  describe('validator', () => {
    it('accepts a valid event', async () => {
      expect(await transformAndValidate(AccountRequestedEvent, createValidEvent())).toBeDefined()
    })

    it('rejects an event with missing detail', async () => {
      await expect(transformAndValidate(AccountRequestedEvent, {
        version: '0',
        id: uuid(),
        'detail-type': 'Account request',
        source: 'componently.vendor',
        time: '2020-06-01T18:19:00Z'
      })).rejects.toBeDefined()
    })
  })
})
