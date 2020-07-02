import { IsUUID } from 'class-validator'
import { JSONSchema } from 'class-validator-jsonschema'

export class AccountRemovedEventDetail {
  @JSONSchema({
    description: 'A unique id identifying the user.'
  })
  @IsUUID()
  userId: string
}
