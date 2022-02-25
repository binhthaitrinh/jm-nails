export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'tagline',
      type: 'text',
      title: 'Tagline',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ctas',
      title: 'Call to actions',
      type: 'array',
      of: [
        {
          title: 'Call to action',
          type: 'cta',
        },
      ],
    },
  ],
};
