import { defineArrayMember, defineField, defineType } from "sanity";

const project = defineType({
  name: "project",
  title: "Works",
  type: "document",
  fields: [
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      description:
        "Project gallery used on works pages and detail views. First image is used in previews.",
      of: [
        defineArrayMember({
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
        }),
      ],
      validation: (rule) => rule.required().min(1).max(30),
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      description: "Lower numbers show first in the works list.",
      validation: (rule) =>
        rule
          .required()
          .integer()
          .min(1)
          .warning("Use positive whole numbers for ordering."),
    }),
  ],
  preview: {
    select: {
      title: "images.0.alt",
      media: "images.0",
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "displayOrder",
      by: [
        { field: "displayOrder", direction: "asc" },
        { field: "_createdAt", direction: "desc" },
      ],
    },
    {
      title: "Newest",
      name: "newest",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
});

export default project;
export { project as projectType };
