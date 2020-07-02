import { JSONSchema } from 'class-validator-jsonschema'
import { Equals, IsISO8601, IsString, IsUUID } from 'class-validator'
import { v4 as uuid } from 'uuid'

export class BaseEvent {
  @JSONSchema({
    description: 'Version of the event schema.'
  })
  @Equals('0')
  version = '0' as const

  @JSONSchema({
    description: 'A unique id identifying the event. You can use this id to deal with message duplicity.'
  })
  @IsUUID()
  id: string = uuid()

  @JSONSchema({
    description: 'An identifier you can use to separate componently events from other events.'
  })
  @Equals('componently.vendor')
  source = 'componently.vendor' as const

  @JSONSchema({
    description: 'When the event happened.'
  })
  @IsISO8601()
  time: string

  @JSONSchema({
    description: 'The type of the event.'
  })
  @IsString()
  'detail-type': string
}
