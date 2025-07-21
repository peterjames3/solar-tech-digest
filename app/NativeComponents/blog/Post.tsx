import { SanityDocument } from "@sanity/client";
import TableOfContents from "./table-Of-content"; // Assuming this path is correct
import { portableTextComponents } from "./PortableTextComponents";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react"; // Assuming this import is from @portabletext/react
import SocialShare from "./SocialShare";
import { format } from "date-fns";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import RecentPosts from "./recent-posts";

const builder = imageUrlBuilder(client);
const urlFor = (source: string) => {
  return builder.image(source);
};

type Category = {
  title: string;
  description: string;
};

export default function Post({ post }: { post: SanityDocument }) {
  if (!post) return <p>Loading ...</p>;

  return (
    <div className="w-full mx-auto max-w-full md:max-w-[840px] xl:max-w-[1440px] px-4 md:px-0 mt-[10rem]">
      <ul className="flex gap-[0.5rem] p-text mb-3 sm:ml-[13px] ">
        <li className="hover:text-primary font-semibold transition-color delay-300">
          <Link href="/">Home</Link>
        </li>
        <li>&gt;</li>
        <li className="hover:text-primary font-semibold transition-color delay-300">
          <Link href="/blog">Blog</Link>
        </li>
        <li>&gt;</li>

        <li className="hover:text-primary font-semibold transition-color delay-300">
          {post.title}
        </li>
      </ul>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Social Share - Sticky */}
        <section className="col-span-1 p-4 h-auto md:min-h-[30rem] md:sticky md:top-7 md:h-screen overflow-y-auto">
          <div className="sm:sticky sm:top-26 flex flex-col  gap-8">
            {/* Ensure post.headings is an array, even if empty */}
            <div className="mb-5">
              <TableOfContents headings={post.headings || []} />
            </div>
            <div className="border-t border-tertiary-30"></div>
            <div>
              <SocialShare title={post.title} />
            </div>
          </div>
        </section>
        <section className="col-span-2 p-4 prose prose-xl ">
          <header className=" py-2 flex flex-col space-y-8">
            <nav className=" ">
              <Link href="/blog" className=" btn ">
                <span className="mr-[0.2rem]"> &larr;</span>
                Go Back
              </Link>
            </nav>
            <h3 className="text-3xl font-semibold text-foreground">
              {post.title}
            </h3>
            <span className="text-[0.97rem] font-medium text-tertiary-white">
              Written on: {format(new Date(post._createdAt), "MM/dd/yyyy")}
            </span>
          </header>
          <figure className="w-full h-[320px] rounded-md overflow-hidden">
            {post?.mainImage && (
              <Image
                src={
                  urlFor(post.mainImage).width(1200).height(650).url() ||
                  "/3d-view-personal-computer-with-vegetation.jpg"
                }
                alt={post?.mainImage?.alt || "Post image"}
                width={1000}
                height={650}
                className="rounded-md"
              />
            )}
          </figure>
          <figcaption className="flex flex-col pt-4 space-y-2">
            <div className=" flex gap-2 items-center p-text text-textColor font-semibold">
              {" "}
              <span className="font-bold">Category: </span>
              {post.categories.map((category: Category, id: number) => (
                <h3 className="font-medium" key={id}>
                  {category.title}
                </h3>
              )) || "Uncategorized post"}
            </div>
            <p className="label-text font-medium ">
              {" "}
              <span className="font-semibold">written by : </span>{" "}
              {post.authorName || "Unknown Author"}
            </p>
          </figcaption>
          <article>
            {post?.body && (
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            )}
          </article>
        </section>
        {/* Right Social Share - Sticky */}
        <section className="col-span-1 p-4 min-h-[30rem] sticky top-10 h-screen overflow-y-auto">
          <div className="sticky top-26">
            <header className="text-foreground mb-12 border-l-4 rounded-sm border-foreground/90 px-2 title font-semibold ">
              Recently Published
            </header>
            <RecentPosts />
          </div>
        </section>
      </div>
    </div>
  );
}
