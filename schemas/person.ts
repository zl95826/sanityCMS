export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  //the document-types are the ones that will be listed in the content-column
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      //A schema type for slugs, typically used to create unique URLs.
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
  options: {
    hotspot: true,
  },
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
