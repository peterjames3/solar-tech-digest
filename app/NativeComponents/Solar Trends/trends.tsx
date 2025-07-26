"use client";

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { motion } from "framer-motion";
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);
const urlFor = (source: string) => {
  return builder.image(source);
};

//import RecentPostsSkeleton from "@/app/NativeComponents/skeleton/recent-posts-skeleton";
export default function Trends({
  latestNewsPosts = [],
}: {
  latestNewsPosts: SanityDocument[];
}) {
  if (latestNewsPosts.length === 0) {
    return <p>No posts available</p>;
  }
  return (
    <div className="bg-slate-100 w-full">
      <div className="wrapper mt-[5rem] py-20 ">
        {/* Featured Section */}
        <section>
          <div className="flex items-center justify-between">
            <header className="border-l-4 rounded-md border-[#211F21] px-6  text-xl md:text-2xl font-semibold">
              Discover The Latest Trends and News in Solar Energy
            </header>
            <div className="">
              <hr className="bg-gray-950 w-64 h-1" />
            </div>
          </div>
          <div className="pt-16  grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8">
            {latestNewsPosts.slice(0, 3).map((post) => (
              <motion.div
                key={post._id}
                className="  rounded-xl overflow-hidden shadow-lg max-h-[400px]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src={
                    post.mainImage?.asset?._ref
                      ? urlFor(post.mainImage.asset._ref)
                          .width(1200)
                          .height(1500)
                          .url()
                      : "/3d-view-personal-computer-with-vegetation.jpg"
                  }
                  alt={post.title || "Untitled"}
                  width={1200}
                  height={1500}
                  className="w-full h-1/2 object-cover"
                />

                <div className=" h-1/2  px-2 mt-3">
                  <div className=" w-[9rem] text-textColor font-medium rounded-md bg-tertiary px-3 py-2 text-center mb-2 ">
                    {Array.isArray(post.categories)
                      ? post.categories.join(", ")
                      : post.categories}
                  </div>

                  <Link
                    href={`/${post.slug.current}`}
                    className="text-sm font-semibold hover:underline"
                  >
                    {post.title || "Untitled Post"}
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">
                    {post.abstract || "No description available."}
                  </p>
                  <div className="flex justify-between text-sm mt-2">
                    <span>{post.authorName || "Unknown Author"}</span>
                    <span>
                      {post._createdAt
                        ? format(new Date(post._createdAt), "MM/dd/yyyy")
                        : "Unknown Date"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
