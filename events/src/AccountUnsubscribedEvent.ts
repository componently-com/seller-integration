import { v4 as uuid } from 'uuid'
import { Equals, IsDefined, ValidateNested } from 'class-validator'
import { AccountUnsubscribedEventDetail } from './AccountUnsubscribedEventDetail'
import { BaseEvent } from './BaseEvent'
import { JSONSchema } from 'class-validator-jsonschema'

export function createExampleAccountUnsubscribedEvent (): AccountUnsubscribedEvent {
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

@JSONSchema({
  title: 'AccountUnsubscribedEvent',
  description: 'This event is sent when a user no longer pays for a subscription ' +
    'and therefore should not have access to the paid service anymore.',
  example: createExampleAccountUnsubscribedEvent()
})
export class AccountUnsubscribedEvent extends BaseEvent {
  @Equals('Account unsubscribed')
  'detail-type' = 'Account unsubscribed' as const

  @ValidateNested()
  @IsDefined()
  detail: AccountUnsubscribedEventDetail
}
