import { IsUUID } from 'class-validator'
import { JSONSchema } from 'class-validator-jsonschema'

export class AccountUnsubscribedEventDetails {
  @JSONSchema({
    description: 'A unique id identifying the user.'
  })
  @IsUUID()
  userId: string
}
