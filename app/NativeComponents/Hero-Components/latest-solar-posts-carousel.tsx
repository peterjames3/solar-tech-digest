"use client";

import { useEffect, useState } from "react";
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
export default function LatestSolarPostsCarousel({
  latestPosts = [],
}: {
  latestPosts: SanityDocument[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1); // Mobile
      } else if (width < 1024) {
        setVisibleCount(2); // Tablet
      } else {
        setVisibleCount(3); // Desktop
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  if (latestPosts.length === 0) {
    return <p>No posts available</p>;
  }

  const total = latestPosts.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + visibleCount) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - visibleCount + total) % total);
  };

  const displayedPosts = latestPosts
    .slice(currentIndex, currentIndex + visibleCount)
    .concat(
      currentIndex + visibleCount > total
        ? latestPosts.slice(0, (currentIndex + visibleCount) % total)
        : []
    );

  return (
    <div className="relative w-full max-w-6xl mx-auto ">
      {/* Navigation buttons */}
      <div className="flex justify-between mb-4">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white px-4 py-1 rounded hover:bg-gray-600"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white px-4 py-1 rounded hover:bg-gray-600"
        >
          Next
        </button>
      </div>

      {/* Posts grid */}
      <motion.div
        className={`grid gap-6 ${
          visibleCount === 1
            ? "grid-cols-1"
            : visibleCount === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedPosts.map((post) => (
          <motion.div
            key={post._id}
            className="relative rounded-xl overflow-hidden shadow-lg max-h-[400px]"
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
              className="w-full  object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />
            <div className="absolute bottom-4 left-4 text-white z-10 pr-5">
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
      </motion.div>
    </div>
  );
}
