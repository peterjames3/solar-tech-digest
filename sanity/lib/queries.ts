import { groq } from "next-sanity";

// Get all posts
//Get all posts

export const postsQuery = groq`
*[_type == "post"]{
   _id,
   _createdAt,
   description,
    title,
    abstract,
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
     "comments": *[
      _type == "comment" &&
      post._ref == ^._id &&
      approved == true
    ]{
      name, comment, _createdAt
    },
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
   abstract,
   slug,
   "categories": categories[]->title,
   mainImage,
   "imageUrl": mainImage.asset->url,
   "authorName": author->name,
  }`;

//Fetching posts based on their categories

// Get the latest posts by published date, limited to the first 5 posts
export const latestPostsQuery = groq`
  *[_type == "post"] | order(_createdAt desc) [0...6] {
  _id,
    _createdAt,
    title,
    abstract,
    slug,
    body,
    "categories": categories[]->
    mainImage,
    "imageURL": mainImage.asset->url,
    "authorName": author->name,
     "authorImage": author->image.asset->url,
   
    
  }
`;

// export const allCategoriesQuery = groq`
// *[_type == "category"] | order(title asc) {
//   _id,
//   title,
//   description
// }
// `;
// export const postsByCategoryQuery = (category: string) => groq`
//   *[_type == 'post' ${
//     category !== "All" ? `&& "${category}" in categories[]->slug.current` : ""
//   }] | order(_createdAt desc) {
//     _id,
//     _createdAt,
//     title,
//     slug,
//     "categories": categories[]->title,
//     mainImage,
//     "imageUrl": mainImage.asset->url,
//     "authorName": author->name
//   }
// `;

export const invertersPosts = groq`
  *[_type == 'post' && 'inverters' in categories[]->slug.current] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    abstract,        
    slug,
    "categories": categories[]->title,
    mainImage,
    "imageUrl": mainImage.asset->url,
    "authorName": author->name
  }
`;
export const solarPanelsPostsQuery = groq`
  *[_type == 'post' && 'solar-panels' in categories[]->slug.current] | order(_createdAt desc) {
    _id,
    _createdAt,
    title, 
    abstract,       
    slug,
    "categories": categories[]->title,
    mainImage,
    "imageUrl": mainImage.asset->url,
    "authorName": author->name
  }
`;
export const batteriesPostsQuery = groq`
  *[_type == 'post' && 'Batteries' in categories[]->slug.current] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    abstract,        
    slug,
    "categories": categories[]->title,
    mainImage,
    "imageUrl": mainImage.asset->url,
    "authorName": author->name
  }
`;



export const newsPosts = groq`
*[_type == 'post' && "news" in categories[]->slug.current
] | order(_createdAt desc) {
  _id,
  _createdAt,
  title,
  abstract,
  slug,
  "categories": categories[]->title,
  mainImage,
  "imageUrl": mainImage.asset->url,
  "authorName": author->name  
}
`;

// Fetch all categories with slugs
export const allCategoriesQuery = `*[_type == 'category'] {
  _id,
  title,
  slug,
  abstract
}`;

// Updated posts query using slugs
export const postsByCategoryQuery = (categorySlug: string) => {
  if (categorySlug === "all") {
    return `*[_type == 'post'] | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      abstract,        
      slug,
       body,
      "categories": categories[]->title,
      mainImage,
      "imageUrl": mainImage.asset->url,
      "authorName": author->name
    }`;
  }

  return `*[_type == 'post' && 
    references(*[_type == 'category' && slug.current == '${categorySlug}']._id)
  ] | order(_createdAt desc) {
    _id,
    _createdAt,
    title, 
    abstract,       
    slug,
     body,
    "categories": categories[]->title,
    mainImage,
    "imageUrl": mainImage.asset->url,
    "authorName": author->name
  }`;
};
