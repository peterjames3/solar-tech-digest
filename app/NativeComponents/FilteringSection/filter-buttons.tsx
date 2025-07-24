"use client";

import { useState, useEffect } from "react";
import { allCategoriesQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

export default function FilteringButtons({
  onCategorySelect,
}: {
  onCategorySelect: (categorySlug: string) => void;
}) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const data = await client.fetch<Category[]>(allCategoriesQuery);
      setCategories(data);
    }

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-wrap  gap-16 bg-gray-100 py-2 px-2">
      <button
        className="bg-primary text-white px-12 py-2 rounded"
        onClick={() => onCategorySelect("all")}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category._id}
          className="bg-tertiary text-foreground px-10 py-2 rounded"
          onClick={() => onCategorySelect(category.slug.current)}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
}
