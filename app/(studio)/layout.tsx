import type { Metadata } from "next";
//import { inter } from '@/app/ui/font';
import "../globals.css";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: {
    template:
      " %s | SolarTechDigest : Your Go-To for Solar Insights, News &  Expert Tips ",
    default:
      "SolarTechDigest : Your Go-To for Solar Insights, News &  Expert Tips",
  },
  keywords: ["solar", "solary", "news", "insights", "expert tips"],
  description: "Your Go-To for Solar Insights, News &  Expert Tips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
