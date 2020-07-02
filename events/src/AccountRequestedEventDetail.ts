import { IsEmail, IsString, IsUUID, Min } from 'class-validator'

export class AccountRequestedEventDetail {
  @IsUUID()
  userId: string

  @IsEmail()
  email: string

  @IsString()
  firstName: string

  @IsString()
  lastName: string

  @IsString()
  @Min(10)
  password: string
}
