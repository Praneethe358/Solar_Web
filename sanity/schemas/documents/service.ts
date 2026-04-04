import { defineField, defineType } from "sanity";

const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(2).max(140),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: async (slug, context) => {
          if (!slug) {
            return true;
          }

          const { document, getClient } = context;
          const client = getClient({ apiVersion: "2026-04-01" });
          const documentId = document?._id?.replace(/^drafts\./, "");

          if (!documentId) {
            return client.fetch(
              'count(*[_type == "service" && slug.current == $slug]) == 0',
              { slug },
            );
          }

          return client.fetch(
            'count(*[_type == "service" && slug.current == $slug && !(_id in [$draft, $published])]) == 0',
            {
              slug,
              draft: `drafts.${documentId}`,
              published: documentId,
            },
          );
        },
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(10).max(240),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 8,
      validation: (rule) => rule.required().min(40).max(6000),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (rule) => rule.required().min(5).max(160),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      description: "Lower number appears first in the Services page.",
      validation: (rule) => rule.required().integer().min(1).max(9999),
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "shortDescription",
      media: "image",
      isActive: "isActive",
    },
    prepare({ title, subtitle, media, isActive }) {
      return {
        title,
        subtitle: isActive ? subtitle : `Inactive - ${subtitle ?? ""}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "displayOrder",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
    {
      title: "Newest",
      name: "newest",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
});

export default service;
export { service as serviceType };