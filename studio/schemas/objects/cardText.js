import React from 'react';

const HTMLpreview = ({ value }) => (
  // eslint-disable-next-line
  <div dangerouslySetInnerHTML={{ __html: value.html }} />
);

export default {
  name: 'cardText',
  title: 'Card containing text',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      options: {
        language: 'html',
      },
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text',
      options: {
        language: 'html',
      },
    },
  ],
  preview: {
    select: {
      html: 'heading',
    },
    component: HTMLpreview,
  },
};
