export default {
  name: 'article',
  title: 'Article / Intel Report',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Electronic Defense', value: 'Electronic Defense' },
          { title: 'Radar Systems', value: 'Radar Systems' },
          { title: 'Geodesy & LiDAR', value: 'Geodesy & LiDAR' },
          { title: 'Maritime Navigation', value: 'Maritime Navigation' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
    },
    {
      name: 'readTime',
      title: 'Reading Time (e.g. 5 min read)',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Short Excerpt / Summary',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        { name: 'name', title: 'Author Name', type: 'string' },
        { name: 'role', title: 'Author Role / Title', type: 'string' },
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'content',
      title: 'Body Content (Markdown / Text)',
      type: 'text',
      rows: 15,
      description: 'Supports markdown headings (##, ###), bullet points (*), and bold (**text**).',
    },
  ],
}
