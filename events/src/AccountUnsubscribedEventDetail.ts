import { IsUUID } from 'class-validator'

export class AccountUnsubscribedEventDetail {
  @IsUUID()
  userId: string
}
