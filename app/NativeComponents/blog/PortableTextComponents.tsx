// PortableTextComponents.tsx
import { PortableTextComponents, toPlainText } from "@portabletext/react"; // <--- Import toPlainText
import { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import slugify from "slugify";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

const builder = imageUrlBuilder(client);
const urlFor = (source: string) => {
  return builder.image(source);
};

// Define types for table structure
interface TableCell extends PortableTextBlock {
  _type: "tableCell";
}

interface TableRow {
  _type: "tableRow";
  cells: TableCell[];
}

interface TableValue {
  _type: "table";
  rows: TableRow[];
}

// Define props for table component
interface TableComponentProps {
  value: TableValue;
}

// Define your TableComponent (same as your existing one)
const TableComponent = ({ value }: TableComponentProps) => {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border-collapse">
        <tbody>
          {value.rows.map((row: TableRow, i: number) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
              {row.cells.map((cell: TableCell, j: number) => (
                <td key={j} className="border p-3">
                  <PortableText // Assuming PortableText is imported/defined elsewhere for recursive rendering
                    value={cell}
                    components={portableTextComponents} // Pass components recursively
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Image component for Sanity images
export interface SanityImageAsset {
  _ref: string;
  _type: "reference";
}

export interface SanityImageValue {
  _type: "image";
  asset: SanityImageAsset;
  alt?: string;
  caption?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

interface SanityImageProps {
  value: SanityImageValue;
}

const SanityImage = ({ value }: SanityImageProps) => {
  if (!value.asset?._ref) {
    console.warn("Image missing asset reference", value);
    return null;
  }

  const imageUrl = urlFor(value.asset._ref)
    .width(1200)
    .height(800)
    .quality(80)
    .url();

  return (
    <figure className="relative w-full h-64 my-8 mb-2">
      <div className="relative w-full h-full">
        <Image
          src={imageUrl}
          alt={value.alt || " "}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          priority={false}
        />
      </div>
      {value.caption && (
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
};

// Main Portable Text Components configuration
export const portableTextComponents: PortableTextComponents = {
  types: {
    image: SanityImage,
    table: TableComponent,
    // Add other custom types here if needed
  },
  block: {
    normal: ({ children }) => (
      <p className="text-[1.1rem] leading-7 mb-4">{children}</p>
    ),
    h2: ({ children, value }) => {
      // <--- ADDED 'value' PROP
      // Using toPlainText from @portabletext/react for consistent slug generation
      const slug = slugify(toPlainText(value), { lower: true, strict: true });
      return (
        <h2 id={slug} className="text-2xl font-bold mb-6 mt-8 scroll-mt-24">
          <Link href={`#${slug}`} className="hover:text-primary">
            {children}
          </Link>
        </h2>
      );
    },
    h3: ({ children, value }) => {
      // <--- ADDED 'value' PROP
      // Using toPlainText from @portabletext/react for consistent slug generation
      const slug = slugify(toPlainText(value), { lower: true, strict: true });
      return (
        <h3 id={slug} className="text-xl font-semibold mb-4 mt-6 scroll-mt-24">
          <Link href={`#${slug}`} className="hover:text-primary">
            {children}
          </Link>
        </h3>
      );
    },
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold mb-3 mt-5">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-[1.1rem] leading-7">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-[1.1rem] leading-7">{children}</li>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const { href } = value as { href?: string }; // Cast value to include href
      const isInternal = href?.startsWith("/"); // Check for optional chaining

      if (isInternal) {
        return (
          <Link href={href || "#"} className="text-primary hover:underline">
            {" "}
            {/* Provide fallback href */}
            {children}
          </Link>
        );
      }

      return (
        <Link
          href={href || "#"} // Provide fallback href
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
};

// If PortableText is defined within this file or needs to be exported
// import { PortableText as PortableTextReact, PortableTextProps } from '@portabletext/react';
// export function PortableText({ components = portableTextComponents, ...props }: PortableTextProps) {
//   return (
//     <PortableTextReact
//       components={ components }
//       {...props}
//     />
//   );
// }
