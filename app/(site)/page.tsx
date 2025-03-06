export const metadata = {
  amp: "hybrid",
};
import Hero from "@/app/NativeComponents/Hero";
import FeaturedCompany from "@/app/NativeComponents/FeaturedCompany";
import FeaturedInsights from "@/app/NativeComponents/FeaturedInsights";

export default function Home() {
  return (
    <main className="my-32">
      <Hero />
      <FeaturedCompany />
      <FeaturedInsights />
    </main>
  );
}
