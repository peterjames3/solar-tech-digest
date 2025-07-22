import { SanityDocument } from "@sanity/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { postQuery, postPathsQuery } from "@/sanity/lib/queries";
import Post from "@/app/NativeComponents/blog/Post";


//set revalidation interval for ISR

export const revalidate = 120;

//Use generateStaticParams to define paths for static generation

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

type Params = Promise<{ slug: string }>;
//Server component to fetch and render the post data based on slug
const PostPage = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug },
  });

  //fallback rendering if post data is missing
  if (!post) {
    notFound();
  }
  console.log(`Post data fetched for slug: ${slug}`);
  return <Post post={post} />;
};

export default PostPage;
