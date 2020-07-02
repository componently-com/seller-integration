import { v4 as uuid } from 'uuid'
import { Equals, IsDefined, IsISO8601, IsUUID, ValidateNested } from 'class-validator'
import { AccountRequestedEventDetail } from './AccountRequestedEventDetail'

export class AccountRequestedEvent {
  @Equals('0')
  version = '0' as const

  @IsUUID()
  id: string = uuid()

  @Equals('Account request')
  'detail-type' = 'Account request' as const

  @Equals('componently.vendor')
  source = 'componently.vendor' as const

  @IsISO8601()
  time: string

  @ValidateNested()
  @IsDefined()
  detail: AccountRequestedEventDetail
}
