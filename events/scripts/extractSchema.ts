import { validationMetadatasToSchemas } from 'class-validator-jsonschema'
import { promises } from 'fs'
import '../src/AccountRequestedEvent'
import '../src/AccountRemovedEvent'
import '../src/AccountSubscribedEvent'
import '../src/AccountUnsubscribedEvent'

const { writeFile } = promises

async function extractSchema () {
  const schemas = validationMetadatasToSchemas()
  for (const schema in schemas) {
    await writeFile(`../schemas/${schema}.json`, JSON.stringify(schemas[schema], null, 2))
  }
}

extractSchema()
