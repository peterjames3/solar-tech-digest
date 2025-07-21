import { sanityFetch } from "@/sanity/lib/fetch";
import { latestPostsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
export const metadata = {
  amp: "hybrid",
};

import Hero from "@/app/NativeComponents/Hero";
import FeaturedCompany from "@/app/NativeComponents/FeaturedCompany";
import LatestsSolarPosts from "@/app/NativeComponents/Hero-Components/LatestsSolarPosts";

export default async function Home() {
  let latestPosts: SanityDocument[] = [];
  try {
    latestPosts = await sanityFetch<SanityDocument[]>({
      query: latestPostsQuery,
    });
  } catch (error) {
    console.log(`Error Fetching latest blog posts: ${error}`);
  }

  return (
    <main className="my-32">
      <Hero />
      <FeaturedCompany />
      <LatestsSolarPosts latestPosts={latestPosts} />
    </main>
  );
}
