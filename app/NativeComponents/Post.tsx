import { SanityDocument } from '@sanity/client';
import { client } from "@/sanity/lib/client";
import  Image from "next/image";
import Link from "next/link";
import  imageUrlBuilder from "@sanity/image-url";
import { PortableText } from '@portabletext/react';

const builder = imageUrlBuilder();
const urlFor = (source:string) =>{
    return builder.image(source).width(1000).height(400).url();
}

export default function Post({ post }: { post: SanityDocument }) {
    if(!post) return <p>Loading ...</p>
    return(
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-10">
            <section className='col-span-1 p-4'> </section>
            <section className='columns-2 p-4'>
                <header></header>
            </section>
            <section className='col-span-1 p-4'></section>
        </div>

    )
}