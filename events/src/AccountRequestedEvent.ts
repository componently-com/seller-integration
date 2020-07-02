import { Equals, IsDefined, ValidateNested } from 'class-validator'
import { AccountRequestedEventDetail } from './AccountRequestedEventDetail'
import { BaseEvent } from './BaseEvent'

export class AccountRequestedEvent extends BaseEvent {
  @Equals('Account request')
  'detail-type' = 'Account request' as const

  @ValidateNested()
  @IsDefined()
  detail: AccountRequestedEventDetail
}
