import { IsString, IsUUID } from 'class-validator'
import { JSONSchema } from 'class-validator-jsonschema'

export class AccountSubscribedEventDetail {
  @JSONSchema({
    description: 'A unique id identifying the user.'
  })
  @IsUUID()
  userId: string

  @JSONSchema({
    description: 'A unique id identifying the subscription. ' +
      'You can contact us to set up the id as you prefer.'
  })
  @IsString()
  subscriptionId: string
}
