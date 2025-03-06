"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";
export default function FeaturedInsights() {
  return (
    <section className="w-full py-8">
      <header className="mb-10 flex items-center justify-between">
        <div className="border-l-4 rounded-md border-l-black p-2">
          <h2 className="headline">Featured Insights on Solar </h2>
        </div>
        <div className="bg-secondary h-[0.2rem] w-1/3 rounded-full"></div>
      </header>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    </section>
  );
}
