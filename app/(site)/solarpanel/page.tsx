import SolarPanelHero from "@/app/NativeComponents/SolarPanelHero";
import SolarPanelSection from "@/app/NativeComponents/solarPanel/solar-panel-section";

export default async function SolarPanelPages() {

  return (
    <div className="my-32 px-16 md:px-0">
      <SolarPanelHero />
      <SolarPanelSection />
       
    </div>
  );
}
