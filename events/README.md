# Componently Seller Integration Events

When integrating with Componently you can register a Webhook
that will receive events relevant to your integration. To set up the
webhook, [send an email](mailto:daniel@barthololmae.name?subject=Register%20a%20webhook).

The webhook will be called as a POST request with the event as JSON body.

## Events

All events are documented [in this repository](./docs/Events.md).
You can find JSON schemas for all events in the [schemas folder](./schemas) and TypeScript definitions
in the [src folder](./src). The TypeScript definitions also include validation decorators
via [class-validator](https://www.npmjs.com/package/class-validator).

## Expected response
When calling your endpoint we expect a 2xx status code. In case of a different
response code or if we don't get a response after 30 seconds, we will retry
sending the same event after 1 minute, 15 minutes, 1h, 3h, 6h, 12h, 24h, 48h,
and finally 72h. You can identify a duplicate event by the event id which will
stay the same throughout all retries.
Please note that the behavior for 3xx status code responses might change
in the future, so please do not rely on this behavior.

## Example
You can use the following `curl` command to send an example event to `localhost:5000/webhook`:
```shell script
curl --location --request POST 'localhost:5000/webhook' \
--header 'Content-Type: application/json' \
--data-raw '{
    "version": "0",
    "id": "d088a204-d3f6-49ed-a1d4-6c7f3c0240ae",
    "detailsType": "Account request",
    "source": "componently.vendor",
    "time": "2020-06-01T18:19:00Z",
    "details": {
        "userId": "af9c043a-8b3b-446b-9402-cc093b584307",
        "email": "test.user@componently.com",
        "firstName": "Test",
        "lastName": "User",
        "password": "Y1BsNWCEBZ9Est5Od3r^"
    }
}'
```
You can find example payloads for all events in the code and schema definitions.
