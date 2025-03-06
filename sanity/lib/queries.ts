import { groq } from "next-sanity";

// Get all posts

export const allPosts = groq`*[_type == 'posts']{
_createdAt,
_id,
title,
slug,
mainImage,
"imageURL": mainImage.asset ->url,
"authorName":author -.name,}`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "posts" && slug.current == $slug][0]{ 
    title, description, mainImage, body
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "posts" && defined(slug.current)][]{
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
  }`

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
  }`
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

  }`
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
}`
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
}`
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
}`
