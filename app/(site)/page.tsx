import { sanityFetch } from "@/sanity/lib/fetch";

import { latestPostsQuery, postsByCategoryQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

export const metadata = {
  amp: "hybrid",
};

import Hero from "@/app/NativeComponents/Hero";
import FeaturedCompany from "@/app/NativeComponents/FeaturedCompany";
import LatestsSolarPosts from "@/app/NativeComponents/Hero-Components/LatestsSolarPosts";
import FilteringSection from "@/app/NativeComponents/FilteringSection/MainFilterSection";
export default async function Home() {
  let latestPosts: SanityDocument[] = [];
  let selectedCategory = "maintenance";

  try {
    selectedCategory = await sanityFetch<SanityDocument[]>({
      query: postsByCategoryQuery(selectedCategory),
    });
    latestPosts = await sanityFetch<SanityDocument[]>({
      query: latestPostsQuery,
    });
  } catch (error) {
    console.log(`Error Fetching latest blog posts: ${error}`);
  }
  console.log("Filtered blog :", selectedCategory.length);
  // console.log("Inverters Posts:", selectedCategory);
  return (
    <main className="my-32">
      <Hero />
      <FeaturedCompany />
      <LatestsSolarPosts latestPosts={latestPosts} />
      <FilteringSection />
    </main>
  );
}
