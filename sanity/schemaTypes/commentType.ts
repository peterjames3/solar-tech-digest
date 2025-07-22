import { defineField, defineType } from "sanity";
export const commentType = defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().min(1).max(50),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      validation: (Rule) => Rule.required().min(1).max(500),
    }),
    defineField({
      name: "postId",
      title: "Post ID",
      type: 'reference',
      to: [{ type: 'post' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name:'approaved',
        title: 'Approved',
        type: 'boolean',
        initialValue: false,
        description: 'Set to true if the comment is approved for display',
    })
  ],
});