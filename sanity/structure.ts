import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Works')
        .child(
          S.documentTypeList('project')
            .title('Works')
            .defaultOrdering([
              { field: 'displayOrder', direction: 'asc' },
              { field: '_createdAt', direction: 'desc' },
            ]),
        ),
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'project'),
    ])
