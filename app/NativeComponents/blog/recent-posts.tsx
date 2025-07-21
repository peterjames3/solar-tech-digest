import { sanityFetch } from "@/sanity/lib/fetch";
import { latestPostsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function RecentPosts() {
  const latestPosts = await sanityFetch<SanityDocument[]>({
    query: latestPostsQuery,
  });

  if (!latestPosts) {
    notFound();
  }
  return (
    <section className=" mt-2 space-y-8">
      {latestPosts.slice(1, 5).map((latestPost) => (
        <Link
          href={latestPost.slug.current || "#"}
          key={latestPost._id}
          className="border-l-4 border-primary px-3 py-2 rounded-md flex flex-col gap-2 hover:cursor-pointer hover:shadow-lg transition-all delay-300"
        >
          <header className=" text-[0.89rem] sm:text-[0.89] md:text-[1.1rem] font-semibold text-foreground">
            {latestPost.title || "Untitled Post"}
          </header>
          <footer className="flex  flex-row justify-between items-center">
            <address className="text-textColor/70 font-medium not-italic">
              {latestPost.authorName || "Unknown author"}
            </address>
            <time>
              {/* Format the date using date-fns */}
              {format(new Date(latestPost._createdAt), "MMMM dd, yyyy") ||
                "Unknown date"}
            </time>
          </footer>
        </Link>
      ))}
    </section>
  );
}
