import { defineArrayMember, defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "攻略文章",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "标题",
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
      name: "excerpt",
      title: "摘要",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(180)
    }),
    defineField({
      name: "category",
      title: "分类",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "tags",
      title: "标签",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "publishedAt",
      title: "发布时间",
      type: "datetime",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "readTime",
      title: "阅读时间",
      type: "string",
      initialValue: "6 分钟"
    }),
    defineField({
      name: "featured",
      title: "首页精选",
      type: "boolean",
      initialValue: false
    }),
    defineField({
      name: "coverImage",
      title: "封面图",
      type: "image",
      options: { hotspot: true }
    }),
    defineField({
      name: "body",
      title: "正文",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "正文", value: "normal" },
            { title: "小标题", value: "h2" },
            { title: "要点", value: "h3" }
          ],
          lists: [
            { title: "项目符号", value: "bullet" },
            { title: "编号", value: "number" }
          ],
          marks: {
            decorators: [
              { title: "加粗", value: "strong" },
              { title: "强调", value: "em" }
            ],
            annotations: [
              {
                name: "link",
                title: "链接",
                type: "object",
                fields: [
                  defineField({
                    name: "href",
                    title: "URL",
                    type: "url"
                  })
                ]
              }
            ]
          }
        })
      ]
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category.title",
      media: "coverImage"
    }
  }
});
