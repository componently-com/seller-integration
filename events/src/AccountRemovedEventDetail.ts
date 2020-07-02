import { IsUUID } from 'class-validator'

export class AccountRemovedEventDetail {
  @IsUUID()
  userId: string
}
