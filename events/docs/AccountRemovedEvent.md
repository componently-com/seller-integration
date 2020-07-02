# AccountRemovedEvent

This event will be sent when a user removes an account. To comply with GDPR rulings you are expected to also remove all data you have on this user that is no longer required.

The schema defines the following properties:

## `detail-type` (string, enum, required)

The type of the event.

This element must be one of the following enum values:

* `Account removed`

## `detail` (object, required)

Properties of the `detail` object:

### `userId` (string, required)

A unique id identifying the user.

## `version` (string, enum, required)

Version of the event schema.

This element must be one of the following enum values:

* `0`

## `id` (string, required)

A unique id identifying the event. You can use this id to deal with message duplicity.

## `source` (string, enum, required)

An identifier you can use to separate componently events from other events.

This element must be one of the following enum values:

* `componently.vendor`

## `time` (string, required)

When the event happened.

Additional restrictions:

* Regex pattern: `d{4}-[01]d-[0-3]dT[0-2]d:[0-5]d:[0-5]d.d+Z?`