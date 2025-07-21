// components/TableOfContents.tsx
"use client";

import { useEffect, useState } from "react";
import slugify from "slugify";
import Link from "next/link";

interface Heading {
  _key: string;
  style: "h2" | "h3"; // Or 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' if you query more
  children: { _key: string; text: string }[];
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -50% 0px" }
    );

    // Ensure elements exist before observing
    headings.forEach((heading) => {
      const element = document.getElementById(generateSlug(heading));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]); // Dependency array should include headings

  const generateSlug = (heading: Heading) => {
    const text = heading.children.map((child) => child.text).join(" ");
    return slugify(text, { lower: true, strict: true });
  };

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120; // Adjust this value if your fixed header/nav changes size
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL without reload for persistent linking
      // This is generally good for user experience and shareable links
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className="sticky top-24 hidden md:block h-[22rem] overflow-y-scroll">
      <h3 className="title font-bold mb-4">📌 Table of Contents</h3>
      <ul className="space-y-2">
        {headings.map((heading) => {
          const slug = generateSlug(heading);
          const text = heading.children.map((child) => child.text).join(" "); // Re-extract text for display
          const isH3 = heading.style === "h3";

          return (
            <li
              key={heading._key}
              className={`${isH3 ? "pl-4 text-sm" : "font-medium"}`}
            >
              <Link
                href={`#${slug}`}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  scrollToHeading(slug); // Call custom scroll function
                }}
                className={`block text-active-link hover:text-button-login-active transition-colors delay-300 ${
                  activeId === slug ? "text-primary font-semibold" : ""
                }`}
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
