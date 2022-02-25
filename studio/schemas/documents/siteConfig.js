export default {
  name: 'site-config',
  type: 'document',
  title: 'Site configuration',
  // __experimental_actions: [/* "create", "delete", */ 'update', 'publish'],
  fieldsets: [{ name: 'contacts', title: 'Contacts and social medias' }],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The site URL',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description:
        'Describe your portfolio for search engines and social media.',
    },
    {
      title: 'Brand logo',
      description:
        'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      type: 'figure',
    },
    {
      title: 'Main navigation',
      name: 'mainNavigation',
      description: 'Select sections for menu',
      validation: (Rule) => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'route' }],
        },
      ],
    },
    {
      title: 'Store Address',
      name: 'address',
      type: 'string',
      fieldset: 'contacts',
    },
    {
      title: 'Phone Number',
      name: 'phoneNumber',
      type: 'string',
      fieldset: 'contacts',
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'url',
      fieldset: 'contacts',
    },
    {
      title: 'Open Graph Image',
      name: 'openGraphImage',
      type: 'image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
    },
    {
      name: 'hero',
      type: 'hero',
      title: 'Hero',
    },
  ],
};
