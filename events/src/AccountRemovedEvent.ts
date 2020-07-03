import { v4 as uuid } from 'uuid'
import { Equals, IsDefined, ValidateNested } from 'class-validator'
import { AccountRemovedEventDetails } from './AccountRemovedEventDetails'
import { JSONSchema } from 'class-validator-jsonschema'
import { BaseEvent } from './BaseEvent'

export function createExampleAccountRemovedEvent (): AccountRemovedEvent {
  return {
    version: '0',
    id: uuid(),
    detailsType: 'Account removed',
    source: 'componently.vendor',
    time: '2020-06-01T18:19:00Z',
    details: {
      userId: uuid()
    }
  }
}

@JSONSchema({
  title: 'AccountRemovedEvent',
  description: 'This event will be sent when a user removes an account. ' +
    'To comply with GDPR rulings you are expected to also remove all ' +
    'data you have on this user that is no longer required.',
  example: createExampleAccountRemovedEvent()
})
export class AccountRemovedEvent extends BaseEvent {
  @Equals('Account removed')
  detailsType = 'Account removed' as const

  @JSONSchema({
    title: 'Account removed event detail'
  })
  @ValidateNested()
  @IsDefined()
  details: AccountRemovedEventDetails
}
