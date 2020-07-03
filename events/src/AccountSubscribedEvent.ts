import { v4 as uuid } from 'uuid'
import { Equals, IsDefined, ValidateNested } from 'class-validator'
import { AccountSubscribedEventDetails } from './AccountSubscribedEventDetails'
import { BaseEvent } from './BaseEvent'
import { JSONSchema } from 'class-validator-jsonschema'

export function createExampleAccountSubscribedEvent (): AccountSubscribedEvent {
  return {
    version: '0',
    id: uuid(),
    detailsType: 'Account subscribed',
    source: 'componently.vendor',
    time: '2020-06-01T18:19:00Z',
    details: {
      userId: uuid(),
      subscriptionId: uuid()
    }
  }
}

@JSONSchema({
  title: 'AccountSubscribedEvent',
  description: 'This event is sent when a user has bought a paid subscription.',
  example: createExampleAccountSubscribedEvent()
})
export class AccountSubscribedEvent extends BaseEvent {
  @Equals('Account subscribed')
  detailsType = 'Account subscribed' as const

  @ValidateNested()
  @IsDefined()
  details: AccountSubscribedEventDetails
}
