import { groq } from "next-sanity";

// Get all posts
//Get all posts

export const postsQuery = groq`
*[_type == "post"]{
   _id,
   _createdAt,
   description,
    title,
   slug,
   mainImage,
  "imageURL": mainImage.asset->url,
   "authorName": author->name,
   "categories": categories[]->{title, description},
 }
 `;
// Get a single post by its slug
export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    mainImage,
    "imageURL": mainImage.asset->url,
    "authorName": author->name,
    "categories": categories[]->{title, description},
    body, // Full body content for PortableText rendering
    // Extract headings for table of contents
    "headings": body[][
      _type == "block" &&
      (style == "h2" || style == "h3") // Querying for h2 and h3
    ] {
      _key,
      style,
      children[] {
        text
      }
    }
  }
`;
// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

//get all post including their categories

export const allSolarPosts = groq`*[_type == "posts"] | order(_createdAt, desc){
   _id,
   _createdAt,
   title,
   slug,
   "categories": categories[]->title,
   mainImage,
   "imageUrl": mainImage.asset->url,
   "authorName": author->name,
  }`;

//Fetching posts based on their categories
// category: Off-Grid & Backup Power: Solutions for Uninterrupted Energy

export const offGridBackupPowerPosts = groq`*[_type == 'post' && 'Off-Grid & Backup Power: Solutions for Uninterrupted Energy' in categories[]->title] | order(_createdAt, desc){
  _id,
  _createdAt,
  title,
  slug,
  "categories":categories[]->title,
  mainImage,
  "imageUrl": mainImage.asset->url,
  "authorName": author->name,
  }`;
//category: Best Solar & battery products
export const solarBatteryProductsPosts = groq`*[_type == 'post' && 'Best Solar & Battery Products: Comparisons & Expert Buying Guides' in categories[]->title] | order(_createdAt, desc){
  _id,
  _createdAt,
  title,
  slug,
  "categories":categories[]->title,
  mainImage,
  "imageUrl": mainImage.asset->url,
  "authorName":author->name,

  }`;
//category: renewable  energy news
export const renewableEnergyPosts = groq`*[_type == 'post' && 'Renewable Energy News: Industry Updates, Innovations & Trends' in categories[]->title ] | order(_createdAt, desc){
_id,
_createdAt,
slug, 
title,
"categories":categorie[]->title,
mainImage,
"imageUrl":mainImage.asset->url,
"authorName":author->name,
}`;
//category: solar installation & maintenance: tips, tricks & Expert advice
export const solarPanelPosts = groq`*[_type == 'post' && 'Solar Panels: Installation, Reviews, Efficiency Tips & maintenance' in categories[]->title ] | order(_createdAt, desc){
_id,
_createdAt,
slug, 
title,
"categories":categorie[]->title,
mainImage,
"imageUrl":mainImage.asset->url,
"authorName":author->name,
}`;
//category: Batteries & inverters: Reviews, Maintenance, buting Guides 7 Tips
export const batteriesInvertersPosts = groq`*[_type == 'post' && 'Batteries & Inverters: Reviews, Maintenance, buying guides & Tips' in categories[]->title ] | order(_createdAt, desc){
_id,
_createdAt,
slug, 
title,
"categories":categorie[]->title,
mainImage,
"imageUrl":mainImage.asset->url,
"authorName":author->name,
}`;

// Get the latest posts by published date, limited to the first 5 posts
export const latestPostsQuery = groq`
  *[_type == "post"] | order(_createdAt desc) [0...8] {
  _id,
    _createdAt,
    title,
    slug,
    body,
    mainImage,
    "imageURL": mainImage.asset->url,
    "authorName": author->name,
     "authorImage": author->image.asset->url,
    "categories": categories[]->{title, description}
    
  }
`;
