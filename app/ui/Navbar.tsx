"use client";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import MobileNavbar from "@/app/ui/MobileNavbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const Menu = [
    { name: "Articles", href: "/" },
    { name: "Batteries & Inverters", href: "/batteries&inverters" },
    { name: "Solar Panel", href: "/solarpanel" },
    { name: "News", href: "/news" },
    { name: "Contact Us", href: "/contact" },
  ];
  return (
    <header className="w-full shadow py-4 fixed top-0 h-[5rem] opacity-100 bg-background">
      {/* Ensure the navbar container has the same width as the body */}
      <div className="w-full mx-auto max-w-full md:max-w-[840px] xl:max-w-[1040px] flex items-center justify-between gap-10 px-4 md:px-0 py-2">
        <nav className="font-bold text-[20px]">
          <Link href="/">
            Solar<span className="text-primary">TechDigest</span>
          </Link>
        </nav>

        <div className="hidden md:flex">
          <nav className="flex sm:gap-2 md:gap-5">
            {Menu.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={clsx(
                  "sm:text-[0.79rem] md:text-[0.9rem] font-normal hover:text-primary",
                  item.href === pathname && "text-primary font-medium"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex">
          <button
            type="button"
            title="Search"
            className="text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Search color="#171717" />
          </button>
        </div>

        <div className="flex md:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
}
