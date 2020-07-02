import * as deref from 'json-schema-deref-sync'
import * as parse from 'json-schema-to-markdown'
import { promises } from 'fs'

const { readFile, writeFile } = promises

async function run () {
  const events = ['AccountRemoved', 'AccountRequested', 'AccountSubscribed', 'AccountUnsubscribed']

  for (const event of events) {
    const schema = await readFile(`./schemas/${event}Event.schema.json`, { encoding: 'utf8'})
    const fullSchema = deref(JSON.parse(schema), { failOnMissing: true, baseFolder: './schemas' })
    const schemaDocs = parse(fullSchema)
    await writeFile(`./docs/${event}Event.md`, schemaDocs)
  }
  const toc = '# Events\n' + events.map(event => `[${event}](./${event}Event.md)`).join('\n\n')
  await writeFile(`./docs/Events.md`, toc)
}

run()
