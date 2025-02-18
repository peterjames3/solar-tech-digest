import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  const categories = [
    { name: "Solar Panels" },
    { name: "Inverters" },
    { name: "Renewable Energy" },
    { name: "Solar Power" },
    { name: "Solar News" },
    { name: "Batteries" },
  ];

  return (
    <section className="w-full flex flex-col md:flex-row py-2 gap-12 md:gap-10 min-h-[45rem]">
      {/* Text Content */}
      <div className="min-h-[35rem] w-full flex flex-col py-12 md:w-1/2 text-center md:text-start space-y-4 ">
        <header>
          <span className="bg-tertiary text-primary px-6 py-2 text-sm rounded-full font-semibold">
            Blog
          </span>
          <h1 className="display leading-[3.5rem]">
            <span className="text-primary">Your Go-To for </span>Solar Insights,
            News & Expert Tips
          </h1>
        </header>
        <p className="p-text">
          Stay ahead in the renewable energy revolution with SolarTechDigest.
          Get the latest updates, expert insights, and practical tips on solar
          technology today!
        </p>
        {/* Action */}
        <div className="w-full my-3 flex gap-10 items-center text-sm justify-center md:items-start md:justify-start">
          <Link
            href="#"
            className="bg-primary text-background font-semibold py-2 px-8 rounded-md border border-primary 
            transition-all delay-300 focus:outline-2 focus:outline-offset-2 focus:outline-primary 
            hover:bg-transparent hover:text-textColor 
            active:shadow-sm active:bg-transparent"
          >
            Subscribe
          </Link>

          <Link
            href="#"
            className="py-2 px-6 rounded-md border border-primary font-semibold text-sm hover:bg-primary hover:text-background transition-all delay-300 "
          >
            Read
          </Link>
        </div>
        {/* Categories as a list */}
        <nav aria-label="Blog Categories" className="mt-3 w-full">
          <ul className="flex flex-wrap gap-2 items-center justify-center md:justify-start">
            {categories.map((category, index) => (
              <li
                key={index}
                className="border border-primary px-3 py-[0.275rem] rounded-full text-[0.875rem]"
              >
                {category.name}
              </li>
            ))}
          </ul>
        </nav>
        {/* stats */}
        <div className="w-full flex items-center justify-around">
          <nav className="text-center">
            <p className="text-[1rem] font-medium">50+</p>
            <p className="text-[0.85rem]">Blog Posts</p>
          </nav>
          <nav className="text-center">
            <p className="text-[1rem] font-medium">100+</p>
            <p className="text-[0.85rem]">
              Trusted by solar enthisiasts and solar owner
            </p>
          </nav>
        </div>
      </div>

      {/* Image Section (AMP & Non-AMP) */}
      <div className="w-full md:w-1/2 overflow-hidden relative h-[37rem] rounded-tl-[20rem] rounded-tr-[20rem] -z-10">
        <Image
          src="/solar panels.webp"
          alt="An image of a solar panel"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
