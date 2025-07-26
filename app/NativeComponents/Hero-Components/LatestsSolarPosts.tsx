"use client";

import LatestsSolarPostsCarousel from "./latest-solar-posts-carousel";

import type { SanityDocument } from "@sanity/client";
import { Suspense } from "react";

import RecentPostsSkeleton from "@/app/NativeComponents/skeleton/recent-posts-skeleton";
export default function LatestsSolarPosts({
  latestPosts = [],
}: {
  latestPosts: SanityDocument[];
}) {
  return (
    <div className="bg-slate-100 w-full">
      <div className="wrapper mt-[5rem] py-20 ">
        {/* Featured Section */}
        <section>
          <div className="flex items-center justify-between">
            <header className="border-l-4 rounded-md border-[#211F21] px-6  text-xl md:text-2xl font-semibold">
              Featured Insights on Solar
            </header>
            <div className="">
              <hr className="bg-gray-950 w-64 h-1" />
            </div>
          </div>
          <div className="pt-16">
            <Suspense fallback={<RecentPostsSkeleton />}>
              {latestPosts.length > 0 ? (
                <LatestsSolarPostsCarousel latestPosts={latestPosts} />
              ) : (
                <p className="text-center text-gray-600 py-10">
                  No articles available at the moment. Please check back later.
                </p>
              )}
            </Suspense>
          </div>
        </section>
      </div>
    </div>
  );
}
