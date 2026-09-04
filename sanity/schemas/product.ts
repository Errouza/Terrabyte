import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product / Hardware System',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'model',
      title: 'Model Code (e.g. NX-700, NX-500)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL Identifier)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'GNSS Systems', value: 'GNSS Systems' },
          { title: 'Radar & Airspace', value: 'Radar & Airspace' },
          { title: 'LiDAR & Hydrographic', value: 'LiDAR & Hydrographic' },
          { title: 'Sensors & Antennas', value: 'Sensors & Antennas' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Status Badge (e.g. Flagship, Military-Grade, Ultra-Precision)',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Short Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mainImage',
      title: 'Product Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Key Capabilities / Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'specs',
      title: 'Technical Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Specification Label (e.g. Accuracy, Frequency, Channels)', type: 'string' },
            { name: 'value', title: 'Value (e.g. 0.8cm RTK, X-Band 9.4 GHz, 1408 Channels)', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'datasheetPdfUrl',
      title: 'Datasheet PDF Download Link (Optional)',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'model',
      media: 'mainImage',
    },
  },
})
