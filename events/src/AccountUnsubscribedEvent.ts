import { Equals, IsDefined, ValidateNested } from 'class-validator'
import { AccountUnsubscribedEventDetail } from './AccountUnsubscribedEventDetail'
import { BaseEvent } from './BaseEvent'

export class AccountUnsubscribedEvent extends BaseEvent {
  @Equals('Account unsubscribed')
  'detail-type' = 'Account unsubscribed' as const

  @ValidateNested()
  @IsDefined()
  detail: AccountUnsubscribedEventDetail
}
