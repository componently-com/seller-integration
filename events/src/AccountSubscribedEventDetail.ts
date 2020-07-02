import { IsUUID } from 'class-validator'

export class AccountSubscribedEventDetail {
  @IsUUID()
  userId: string

  @IsUUID()
  subscriptionId: string
}
