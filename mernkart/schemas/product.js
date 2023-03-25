export default{
    name:'product', //Name of the sanity schema
    title:"Product", //Title of the document
    type:"document", //type = document
    fields:[{
        name:'image', //For images of the product
        title:'Image',
        type:'array',
        of:[{type:'image'}], //Array of images for each product
        options:{
            hotspot:true //enables the user interface for selecting what areas of the image should always be cropped,what areas should never be cropped and the center of the area to crop around when resizing(basically adjusting the images accordingly)

        }
    },
    {
        name:'name',
        title:'Name',
        type:'string'
    },
    {
        name:'slug',
        title:'Slug',
        type:'slug', //slug is like a url , a unique string for each product
        options:{
            source:'name', //slug will be generated based on the name of the product
            maxLength:90,
        }
    },
    {
        name:'price',
        title:'Price',
        type:'number'
    },
    {
        name:'details',
        title:'Details',
        type:'string'
    }
    ]
}