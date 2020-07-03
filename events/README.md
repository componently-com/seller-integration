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
