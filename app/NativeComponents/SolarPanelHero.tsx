import Image from "next/image";
export default function SolarPanelHero() {
  return (
    <section className="w-full mx-auto max-w-full md:max-w-[840px] xl:max-w-[1040px] px-4 md:px-0 mt-[5rem]  h-[20rem] relative -z-10 rounded-3xl overflow-hidden">
      <Image
        src="/low-key image of a high-tech solar farm at sunrise..webp"
        alt="low-key image of a high-tech solar farm at sunrise "
        priority={true}
        fill={true}
        style={{ objectFit: "cover" }}
      />

      <header className="absolute top-1/2 left-1/2 transition -translate-y-1/2 -translate-x-1/2 ">
        <h2 className="headline text-background hover:text-primary transition-color duration-300 ease-in-out">
          Solar Panels
        </h2>
      </header>
    </section>
  );
}
