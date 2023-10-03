export default {
  name: 'property',
  //     The name: 'property' property tells the Sanity Studio that when you create a new document of this type,
  //     it should have "_type": "property" in its JSON representation.
  title: 'Property',
  //   title ----> defines how this document type will be displayed
  //   in the studio's user interface. You can choose any name you like here,
  //   but it's often a capitalized version of the name.
  type: 'document',
  //   The type: 'document' property indicates that this is a document type,
  //   allowing you to create new "property" documents in the studio.
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'built', type: 'datetime', title: 'Built Year'},
    {name: 'location', type: 'geopoint', title: 'Location'},
    {
      name: 'propertyType',
      type: 'string',
      title: 'Property Type',
      options: {
        list: [
          {title: 'House', value: 'house'},
          {title: 'Flat', value: 'flat'},
          {title: 'Apartment', value: 'apartment'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {name: 'images', type: 'array', title: 'Images', of: [{type: 'propertyImage'}]},
    {name: 'pricePerNight', type: 'number', title: 'Price Per Night'},
    {name: 'beds', type: 'number', title: 'Beds'},
    {name: 'bedrooms', type: 'number', title: 'Bedrooms'},
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {name: 'id', type: 'number', title: 'ID'},
    {name: 'description', type: 'string', title: 'Description'},
    {name: 'reviews', type: 'array', title: 'Reviews', of: [{type: 'review'}]},
    {name: 'host', type: 'host', title: 'Host'},
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pricePerNight',
    },
  },
  //   In the "fields" array, you describe the fields/attributes available for this document type.
  //   In this case, you have one field, which is an object with "name," "type," and "title" properties.
  //   The "name" property defines the key in the data where the studio will store the field's value.
  //   The "type" property specifies the type of input field. Here, it's a single-line text input field with the type "string."
}

//npm run dev
//Head over to http://localhost:3333
//https://www.sanity.io/docs/create-a-schema-and-configure-sanity-studio
//https://www.sanity.io/docs/schema-types
