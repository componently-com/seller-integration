import { v4 as uuid } from 'uuid'
import { Equals, IsDefined, ValidateNested } from 'class-validator'
import { AccountRequestedEventDetails } from './AccountRequestedEventDetails'
import { BaseEvent } from './BaseEvent'
import { JSONSchema } from 'class-validator-jsonschema'

export function createExampleAccountRequestedEvent (): AccountRequestedEvent {
  return {
    version: '0',
    id: uuid(),
    detailsType: 'Account request',
    source: 'componently.vendor',
    time: '2020-06-01T18:19:00Z',
    details: {
      userId: uuid(),
      email: 'test.user@componently.com',
      firstName: 'Test',
      lastName: 'User',
      password: 'Y1BsNWCEBZ9Est5Od3r^'
    }
  }
}

@JSONSchema({
  title: 'AccountRequestedEvent',
  description: 'This event is sent when a user wants to set up an account with ' +
    'your service. You are expected to provision said account right after you ' +
    'receive the event as a free or trial account.',
  example: createExampleAccountRequestedEvent()
})
export class AccountRequestedEvent extends BaseEvent {
  @Equals('Account request')
  detailsType = 'Account request' as const

  @ValidateNested()
  @IsDefined()
  details: AccountRequestedEventDetails
}
