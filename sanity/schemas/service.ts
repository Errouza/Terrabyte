export default {
  name: 'service',
  title: 'Service / Capability',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'category',
      title: 'Domain Category',
      type: 'string',
    },
    {
      name: 'badge',
      title: 'Badge Label (e.g. MISSION CRITICAL)',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Service Summary',
      type: 'text',
      rows: 3,
    },
    {
      name: 'features',
      title: 'Key Features / Capabilities',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}
