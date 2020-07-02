import { v4 as uuid } from 'uuid'
import { AccountRequestedEvent, createExampleAccountRequestedEvent } from './AccountRequestedEvent'
import { transformAndValidate } from 'class-transformer-validator'

describe('AccountRequestedEvent', () => {
  describe('interface', () => {
    it('accepts a valid event', () => {
      const event: AccountRequestedEvent = createExampleAccountRequestedEvent()
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
      expect(await transformAndValidate(AccountRequestedEvent, createExampleAccountRequestedEvent())).toBeDefined()
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
