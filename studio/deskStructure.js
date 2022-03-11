import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.document()
            .schemaType('site-config')
            .documentId('df6469c5-a8d5-49ea-9849-50728ce6838d')
        ),
      S.listItem()
        .title('Sections')
        .schemaType('section')
        .child(
          S.documentTypeList('section')
            .title('Sections')
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
        ),
    ]);
