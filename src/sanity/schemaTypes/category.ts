import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "攻略分类",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "分类名称",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "icon",
      title: "像素图标语义",
      type: "string",
      description: "例如：key, house, train, shield"
    }),
    defineField({
      name: "description",
      title: "分类说明",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "order",
      title: "排序",
      type: "number",
      initialValue: 0
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description"
    }
  }
});
