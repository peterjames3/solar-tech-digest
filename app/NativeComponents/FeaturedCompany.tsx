"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
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
    <section id="Features-companies" className="wrapper px-2 md:px-0 py-12">
      <header className="text-center mb-12">
        <h2 className="headline text-3xl md:text-4xl font-bold text-foreground">
          Kenya&apos;s Most Reliable Solar Brands
          <br className="hidden md:block" />
          <span className="text-primary font-normal block mt-2 text-xl md:text-2xl">
            Featured in our blog
          </span>
        </h2>
      </header>

      <div className="relative">
        <LogoScroller companies={companies} direction="left" />
        {/* Gradient overlays for fade effect */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}

type Company = {
  name: string;
  logo: string;
};

type LogoScrollerProps = {
  companies: Company[];
  direction?: "left" | "right";
};

function LogoScroller({ companies, direction = "left" }: LogoScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate companies for seamless looping
  const repeatedCompanies = [...companies, ...companies];

  // Animation configuration
  const animation = {
    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
    transition: {
      ease: "linear",
      duration: 30,
      repeat: Infinity,
    },
  };

  return (
    <div className="overflow-hidden relative group">
      <motion.div
        animate={animation}
        onHoverStart={() => scrollRef.current?.classList.add("paused")}
        onHoverEnd={() => scrollRef.current?.classList.remove("paused")}
        ref={scrollRef}
        className="flex w-fit gap-8 md:gap-12 px-4"
      >
        {repeatedCompanies.map((company, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 flex justify-center items-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={160}
              height={80}
              className="object-contain max-h-[60%]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
