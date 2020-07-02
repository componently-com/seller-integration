# Componently Seller Integration Events

When integrating with Componently you can register a Webhook
that will receive events relevant to your integration. To set up the
webhook, [send an email](mailto:daniel.bartholomae@componently.com?subject=Register%20a%20webhook).

The webhook will be called as a POST request with the event as JSON body.

## Events

All events are documented [in this repository](./docs/Events.md).
You can find JSON schemas for all events in the [schemas folder](./schemas) and TypeScript definitions
in the [src folder](./src). The TypeScript definitions also include validation decorators
via [class-validator](https://www.npmjs.com/package/class-validator).

## Event signatures
Each request contains the following headers as a signature:

**componently-signature-timestamp** is the ISO 8601 UTC datetime when the event was signed. You should discard the event
if this is more than 15 minutes in the past.

**componently-signature-algorithm** is the algorithm used for signing. At the moment only RS256 is supported.

**componently-signature-version** is the version of the signature. For now, this is always 1.

**componently-signature** is the signature. To verify, concatenate the timestamp, a dot (`.`) and the event body
and use the corresponding public key. You can obtain the public key by [sending an email](mailto:daniel.bartholomae@componently.com?subject=Obtain%20public%20key%20for%20webhooks).

Here is an example of what the headers could look like:
```
componently-signature-timestamp=2020-07-01T18:12:00Z
componently-signature-algorithm=RS256
componently-signature-version=1
componently-signature=nupgm7iFqSnERq9GxszwBrsYrYfMuSfUGj8tGQlkY3Ksh3o_IDfq1GO5ngHQLZuYPD-8qPIovPBEVomGZCo_jYvsbjmYkalAStmF01TvSoXQgJd09ygZstH0liKsmINStiRE8fTA-yfEIuBYttROizx-cDoxiindbKNIGOsqf6yOxf7ww8DrTBJKYRnHVkAfIK8wm9LRpsaOVzWdC7S3cbhCKvANjT0RTRpAx8b_AOr_UCpOr8paj-xMT9Zc9HVCMZLBfj6OZ6yVvnC9g6q_SlTa--fY9SL5eqy6-q1JGoyK_-BQ_YrCwrRdrjoJsJ8j-XFRFWJX09W3oDuZ990nGA
```
