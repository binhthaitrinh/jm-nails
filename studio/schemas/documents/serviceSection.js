export default {
  name: 'serviceSection',
  title: 'Service Section',
  type: 'document',
  fields: [
    {
      name: 'groupedServiceTitle',
      title: 'Grouped Service Title',
      type: 'string',
    },
    {
      name: 'services',
      title: 'List of services',
      type: 'array',
      of: [{ type: 'groupedService' }],
    },
  ],
};
