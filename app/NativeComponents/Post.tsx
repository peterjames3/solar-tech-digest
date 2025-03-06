import { SanityDocument } from "@sanity/client";
//import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import SocialShare from "@/app/NativeComponents/SocialShare";
const builder = imageUrlBuilder();
const urlFor = (source: string) => {
  return builder.image(source).width(1000).height(400).url();
};

export default function Post({ post }: { post: SanityDocument }) {
  if (!post) return <p>Loading ...</p>;
  return (
    <div className="">
      <ul>
        <li>
          <Link
            href="/"
            className=" text-secondary hover:undeline hover:font-semibold transition-all duration-3000 ease-in-out hover:text-primary"
          >
            Home
          </Link>
        </li>
        <li>{post.title}</li>
      </ul>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-10">
        <section className="col-span-1 p-4 h-screen fixed "> </section>
        <section className="columns-2 p-4 prose prose-xl  mt-[8rem]">
          <header className=" py-2 flex flex-col  space-y-10">
            <nav className=" text-sm  font-medium  text-gray-900 bg-primary  px-6 py-3  transition-all delay-300 hover:bg-transparent ">
              <Link href="/" className=" no-underline">
                <span> &larr;</span>
                Go Back
              </Link>
            </nav>
            <h2 className="text-3xl font-semibold  text-foreground">
              {post.title}
              <p className="text-sm text-gray-500">{post.date}</p>
            </h2>
          </header>
          <figure className="w-full h-[320px]">
            {post?.mainImage && (
              <Image
                src={urlFor(post.mainImage)}
                alt={post?.mainImage?.alt || "Post image"}
                width={1000}
                height={400}
                className="rounded-md"
              />
            )}
          </figure>
          <figcaption className="flex flex-col pt-4 space-y-2">
            <h3 className="text-sm text-primary">
              {post.categories || "Uncategorized post"}
            </h3>
            <p className="text-sm">{post.authorName || "Unknown Author"}</p>
          </figcaption>

          <article>
            {post?.body && (
              <PortableText
                value={post.body}
                components={{
                  block: {
                    normal: ({ children }) => <p>{children}</p>,
                    h2: ({ children }) => (
                      <h2 className="text-xl font-bold">{children}</h2>
                    ),
                  },
                }}
              />
            )}
          </article>
        </section>
        <section className="col-span-1 p-4 h-screen fixed">
          <SocialShare title={post.title} />
        </section>
      </div>
    </div>
  );
}
