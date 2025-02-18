
export const metadata ={
  amp:'hybrid',
}
import Hero from "@/app/NativeComponents/Hero";
import FeaturedCompany from  "@/app/NativeComponents/FeaturedCompany";

export default function Home() {
  return (

      <main className="my-32">
       <Hero />
       <FeaturedCompany />

      </main>
    
  
  );
}
