export default {
  name: 'section',
  title: 'Section',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subHeading',
      title: 'Sub-heading',
      type: 'string',
    },
    {
      name: 'hash',
      title: 'Hash',
      type: 'reference',
      to: [{ type: 'route' }],
    },
    {
      name: 'sectionContent',
      title: 'Section Content',
      type: 'array',
      of: [
        {
          type: 'form',
        },
        // {
        //   type: 'intro',
        // },
        {
          type: 'imageSection',
        },
        {
          type: 'serviceSection',
        },
        {
          type: 'cardText',
        },
        {
          type: 'figure',
        },
        {
          type: 'testimonial',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subTitle: 'subHeading',
      hash: 'hash.hash.current',
    },
    prepare({ title, subTitle, hash }) {
      return {
        title: title || hash,
        subtitle: subTitle || hash,
      };
    },
  },
};
