"use client";

import { motion } from "motion/react";
import FloatingElements from "@/app/NativeComponents/animation/floating-element";

export default function SubTestimonialCard() {
  return (
    <section className="py-16 w-full bg-[#e2ebf3]/30">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[840px] mx-auto p-6 rounded-2xl shadow-md bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] border border-gray-200 relative"
      >
        <h3 className="text-xl font-semibold text-gray-800 text-center">
          Alice K
        </h3>

        <div className="flex items-center justify-center mt-2 space-x-2">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.42 8.263L12 18.897l-7.42 4.636L6 15.27 0 9.423l8.332-1.268z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-blue-600">2 month ago</span>
        </div>

        <p className="mt-4 text-gray-700 text-sm text-center leading-relaxed">
          &apos;I like the clarity and meticulous nature of the course
          presentation. I like the fact that the course content and presentation
          was made using the content of the certification requirements. Great
          help, reasonably priced compared to the others which I see as rip off.
          Thanks. I passed my exam today!&apos;
        </p>
        <FloatingElements />
      </motion.div>
    </section>
  );
}
