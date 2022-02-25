import { LinkIcon } from '@sanity/icons';

export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  icon: LinkIcon,
  fields: [
    {
      name: 'hash',
      type: 'slug',
      title: 'Hash',
    },
    {
      name: 'section',
      title: 'Section',
      type: 'reference',
      description: 'Select the section that this route should point to',
      to: [{ type: 'section' }],
    },
  ],
  preview: {
    select: {
      slug: 'hash.current',
      sectionHeading: 'section.heading',
    },
    prepare({ slug, sectionHeading }) {
      return {
        title: slug === '/' ? '/' : `/#${slug}`,
        subtitle: sectionHeading ? `Section: ${sectionHeading}` : 'Intro',
      };
    },
  },
};
