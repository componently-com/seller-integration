import { v4 as uuid } from 'uuid'
import { Equals, IsDefined, IsISO8601, IsUUID, ValidateNested } from 'class-validator'
import { AccountRemovedEventDetail } from './AccountRemovedEventDetail'
import { JSONSchema } from 'class-validator-jsonschema'

export function createExampleAccountRemovedEvent (): AccountRemovedEvent {
  return {
    version: '0',
    id: uuid(),
    'detail-type': 'Account removed',
    source: 'componently.vendor',
    time: '2020-06-01T18:19:00Z',
    detail: {
      userId: uuid()
    }
  }
}

@JSONSchema({
  description: 'This event will be sent when a user removes an account. ' +
    'To comply with GDPR rulings you are expected to also remove all' +
    'data you have on this user that is no longer required.',
  example: createExampleAccountRemovedEvent()
})
export class AccountRemovedEvent {
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
  @Equals('Account removed')
  'detail-type' = 'Account removed' as const

  @ValidateNested()
  @IsDefined()
  detail: AccountRemovedEventDetail
}
