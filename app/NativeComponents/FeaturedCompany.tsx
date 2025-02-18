"use client";

import Image from "next/image";

const companies = [
  { name: "Jinko", logo: "/jinko logony.png" },
  { name: "TrinaSolar", logo: "/trinasolar logo.png" },
  { name: "Exide", logo: "/exide headerLogo.jpg" },
  { name: "JY Solar", logo: "/Jysolar.webp" },

  { name: "CanadianSolar", logo: "/CS-LOGO-RED-RGB-NEW-2024-W-TAG-2.png" },
  { name: "Loom Solar", logo: "/loom_solar_logo.png.png" },
  { name: "Sunrun", logo: "/sunrun_logo.svg.png" },
];
export default function FeaturedCompany() {
  return (
    <section id="Features-companies" className=" w-full my-12">
      <header>
        <h2 className="title text-foreground">
          Discover the leading solar companies whose products are featured in
          our blog
        </h2>
      </header>
      <div className="flex flex-wrap gap-5">
        {/* Logos Grid */}
        <div
          aria-label="list of solar companies brand logo"
          className="mt-6 flex flex-wrap justify-center gap-6"
        >
          {companies.map((company, index) => (
            <div
              key={index}
              className="w-32 h-16 flex justify-center items-center border border-gray-300 bg-white rounded-lg shadow-sm"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
