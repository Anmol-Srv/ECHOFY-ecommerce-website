//FOR SANITY CLIENT
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// import build from 'next/dist/build';


export const client = sanityClient({
    projectId: '444zz6h3', //So that sanity knows which project of sanity to be connected with
    dataset: 'production', //To know whether we are in production or development
    apiVersion: '2022-11-15',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);