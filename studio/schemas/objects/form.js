export default {
  name: 'form',
  title: 'Form',
  type: 'object',
  fields: [
    {
      name: 'formGroups',
      title: 'Form group',
      type: 'array',
      of: [{ type: 'formGroup' }],
    },
    {
      name: 'buttonCta',
      title: 'Button CTA',
      type: 'cta',
    },
  ],
};
