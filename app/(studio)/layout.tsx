import type { Metadata } from "next";
//import { inter } from '@/app/ui/font';
import "../globals.css";

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
      <body>{children}</body>
    </html>
  );
}
