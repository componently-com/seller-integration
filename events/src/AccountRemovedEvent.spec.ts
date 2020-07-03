import { v4 as uuid } from 'uuid'
import { AccountRemovedEvent, createExampleAccountRemovedEvent } from './AccountRemovedEvent'
import { transformAndValidate } from 'class-transformer-validator'

describe('AccountRemovedEvent', () => {
  describe('interface', () => {
    it('accepts a valid event', () => {
      const event: AccountRemovedEvent = createExampleAccountRemovedEvent()
    })

    it('rejects an event with missing detail', () => {
      // @ts-expect-error
      const event: AccountRemovedEvent = {
        version: '0',
        id: uuid(),
        detailsType: 'Account removed',
        source: 'componently.vendor',
        time: '2020-06-01T18:19:00Z'
      }
    })
  })

  describe('validator', () => {
    it('accepts a valid event', async () => {
      expect(await transformAndValidate(AccountRemovedEvent, createExampleAccountRemovedEvent())).toBeDefined()
    })

    it('rejects an event with missing detail', async () => {
      await expect(transformAndValidate(AccountRemovedEvent, {
        version: '0',
        id: uuid(),
        detailsType: 'Account request',
        source: 'componently.vendor',
        time: '2020-06-01T18:19:00Z'
      })).rejects.toBeDefined()
    })
  })
})
