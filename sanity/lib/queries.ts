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
