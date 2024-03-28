import type { SchemaOrgSnippet } from '~/interfaces/common/commonInterfaces'

const createSchemaScript = (snippet: SchemaOrgSnippet) => {
  const snippetKey = snippet.singleSnippet ? 'singleSnippet' : 'single_snippet'
  return snippet[snippetKey] &&
  snippet[snippetKey].length &&
  snippet[snippetKey][0]?.text
    ? {
      type: 'application/ld+json',
      innerHTML: snippet[snippetKey][0]?.text,
    }
    : null
}

export const extractSchemaOrg = (schemaOrgSnippets: SchemaOrgSnippet[]) => {
  if (schemaOrgSnippets && schemaOrgSnippets.length) {
    const schema = schemaOrgSnippets.map(createSchemaScript).filter(Boolean)
    return schema.length ? schema : null
  }
  return null
}
