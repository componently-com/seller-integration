# AccountUnsubscribedEvent

This event is sent when a user no longer pays for a subscription and therefore should not have access to the paid service anymore.

The schema defines the following properties:

## `detailsType` (string, enum, required)

The type of the event.

This element must be one of the following enum values:

* `Account unsubscribed`

## `details` (object, required)

Properties of the `details` object:

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