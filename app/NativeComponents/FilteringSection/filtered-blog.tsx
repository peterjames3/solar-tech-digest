"use client";
import FilteringButtons from "./filter-buttons";
import { postsByCategoryQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import FilteredBlogSkeleton from "../skeleton/filtered-blog-skeleton";

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  imageUrl: string;
  categories?: string[];
  authorName: string;
  _createdAt: string;
}

export default function FilteredBlog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const query = postsByCategoryQuery(selectedCategory);
        const data = await client.fetch<Post[]>(query);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [selectedCategory]);

  return (
    <div className="space-y-8">
      <FilteringButtons onCategorySelect={setSelectedCategory} />

      {loading ? (
        <FilteredBlogSkeleton />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 h-[100%]">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article
                key={post._id}
                className="shadow rounded-md overflow-hidden "
              >
                <figcaption>
                  {post.imageUrl && (
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={800}
                      height={200}
                      className="mb-2 rounded h-[12rem]"
                    />
                  )}
                </figcaption>
                <div className="h-1/2 mt-4  space-y-4 p-2">
                  <div className="flex flex-wrap gap-1 ">
                    {post.categories?.map((cat: string, i: number) => (
                      <span
                        key={i}
                        className="bg-tertiary text-xs px-2 py-1 rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-lg">{post.title}</h3>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500">{post.authorName}</p>
                    <span className="text-sm">
                      {post._createdAt
                        ? format(new Date(post._createdAt), "MM/dd/yyyy")
                        : "Unknown Date"}
                    </span>
                  </div>
                  <button className="">
                    <Link
                      href={`/${post.slug.current}`}
                      className="bg-primary py-2 px-8  mb-2 block rounded-md text-background"
                    >
                      Read More{" "}
                    </Link>
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div>No posts found in this category</div>
          )}
        </div>
      )}
    </div>
  );
}
