import { Equals, IsDefined, ValidateNested } from 'class-validator'
import { AccountSubscribedEventDetail } from './AccountSubscribedEventDetail'
import { BaseEvent } from './BaseEvent'

export class AccountSubscribedEvent extends BaseEvent {
  @Equals('Account subscribed')
  'detail-type' = 'Account subscribed' as const

  @ValidateNested()
  @IsDefined()
  detail: AccountSubscribedEventDetail
}
