import BatteriesAndInvertersBlog from "./batteries-inverters-blogs";
export default function BatteriesAndInvertersSection() {
  return (
    <div className="w-full mt-5 py-10 ">
      <div className="wrapper flex flex-col gap-4">
        <div className="flex items-center justify-between mb-4">
          <header className="border-l-4 rounded-md border-[#211F21] px-6  text-xl md:text-2xl font-semibold">
            Batteries and Inverters related Articles
          </header>
          <div className="">
            <hr className="bg-gray-950 w-64 h-1" />
          </div>
        </div>
        <BatteriesAndInvertersBlog />
      </div>
    </div>
  );
}
