import { validationMetadatasToSchemas } from 'class-validator-jsonschema'
import { promises } from 'fs'
import '../src/AccountRequestedEvent'
import '../src/AccountRemovedEvent'
import '../src/AccountSubscribedEvent'
import '../src/AccountUnsubscribedEvent'

const { writeFile } = promises

function fixEventDetailReferencePath (schema) {
  if (schema.properties.detail) {
    schema.properties.detail.$ref = schema.properties.detail.$ref + '.schema.json'
  }
}

async function extractSchema () {
  const schemas = validationMetadatasToSchemas({ refPointerPrefix: './'})
  for (const schemaName in schemas) {
    fixEventDetailReferencePath(schemas[schemaName])
    await writeFile(`./schemas/${schemaName}.schema.json`, JSON.stringify(schemas[schemaName], null, 2))
  }
}

extractSchema()
