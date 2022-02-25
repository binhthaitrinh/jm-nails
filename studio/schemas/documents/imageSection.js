export default {
  name: 'imageSection',
  title: 'Image Gallery Section',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          title: 'Image',
          type: 'figure',
        },
      ],
    },
  ],
};
