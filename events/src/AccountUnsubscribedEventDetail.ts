import { IsUUID } from 'class-validator'
import { JSONSchema } from 'class-validator-jsonschema'

export class AccountUnsubscribedEventDetail {
  @JSONSchema({
    description: 'A unique id identifying the user.'
  })
  @IsUUID()
  userId: string
}
