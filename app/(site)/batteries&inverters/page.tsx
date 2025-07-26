import BatteriesHero from "@/app/NativeComponents/BatteriesHero";
import BatteriesAndInvertersSection from "@/app/NativeComponents/BatteriesAndInverters/batteries-inverters-section";

export default function BatteriesInvertersPage() {
  return (
    <div className="my-32 px-10 md:px-0">
      <BatteriesHero />
      <BatteriesAndInvertersSection />
    </div>
  );
}
