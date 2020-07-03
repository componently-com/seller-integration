import { IsEmail, IsString, IsUUID, Min } from 'class-validator'
import { JSONSchema } from 'class-validator-jsonschema'

export class AccountRequestedEventDetails {
  @JSONSchema({
    description: 'A unique id identifying the user.'
  })
  @IsUUID()
  userId: string

  @JSONSchema({
    description: 'The user\'s email address.'
  })
  @IsEmail()
  email: string

  @JSONSchema({
    description: 'The user\'s first name.'
  })
  @IsString()
  firstName: string

  @JSONSchema({
    description: 'The user\'s last name.'
  })
  @IsString()
  lastName: string

  @JSONSchema({
    description: 'The password the user chooses. Do not save or log this unhashed!'
  })
  @IsString()
  @Min(10)
  password: string
}
