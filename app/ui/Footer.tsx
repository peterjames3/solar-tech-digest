"use client";
import { RiInstagramFill, RiTwitterFill, RiFacebookFill } from "react-icons/ri";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-4  bg-green-50 ">
      <div className="wrapper grid grid-cols-1  py-10  md:grid-cols-4 gap-16 px-4 text-gray-700 dark:text-gray-200">
        {/* Logo and Newsletter Section */}
        <div className="flex flex-col  sm:items-start">
          <Link href="/" className=" font-semibold text-2xl">
            Solar<span className="text-primary">TechDigest</span>
          </Link>
          <p className="mt-4 text-[0.95rem]">
            At SolarPoint Systems East Africa, we harness the power of the sun
            to bring you clean, renewable energy solutions. Our commitment to
            sustainability drives us to innovate, ensuring that every home and
            business can achieve energy independence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="">
          <div className="h-1/2">
            <h3 className="font-bold text-lg mb-3 ">Solar Panels</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary">
                  Top 5 Solar Panels Brands
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-primary">
                  Solar Panel Comparison Table
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary">
                  Cost Of Solar Panels
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-6 h-1/2">
            <h3 className="font-bold text-lg mb-3 ">Solar Inverters</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary">
                  Top 5 Inverter Brands
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-primary">
                  Inverter Comparison Table
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary">
                  Hybrid Inverter Comparison
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Microinverters
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Resources Links */}
        <div>
          <div className="h-1/2">
            <h3 className="font-bold text-lg mb-4 ">Solar Batteries</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="hover:text-primary">
                  Top 5 Battery Brands
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-primary">
                  Battery Costs
                </Link>
              </li>
            </ul>
          </div>
          <div className="h-1/ mt-6">
            <h3 className="font-bold text-lg mb-4 ">Hot Water Heater Pumps</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="hover:text-primary">
                  Heat Pump Installation
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-primary">
                  Top 5 Heat Pump Brands
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary">
                  Heat Pump STC Claculator
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <div className="h-1/2">
            <h3 className="font-bold text-lg mb-3 ">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary">
                  Solar Calculator
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-primary">
                  Solar panel reviews
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary">
                  Solar battery reviews
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary">
                  Solar inverter reviews
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-6 h-1/2">
            <h3 className="font-bold text-lg mb-4 ">Stay Connected</h3>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <RiFacebookFill size="24" className="text-yellow-400" />
              </Link>

              <Link
                href="https://instagram.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <RiInstagramFill size="24" className="text-yellow-400" />
              </Link>

              <Link
                href="https://twitter.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <RiTwitterFill size="24" className="text-yellow-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-0.5 border-accent2" />

      {/* Copyright */}
      <div className="text-sm text-gray-600 text-center mt-6 py-2">
        © {new Date().getFullYear()} SolarPointSystemsE.A. All rights reserved.{" "}
        Designed & built with ❤️ by{" "}
        <span className="text-primary font-semibold">KItechCreatives</span>
      </div>
    </footer>
  );
}
