import FilteredBlog from "./filtered-blog";
export default function FilteringSection() {
  return (
    <div className="w-full mt-5 py-10 ">
      <div className="wrapper flex flex-col gap-4">
        <FilteredBlog />
      </div>
    </div>
  );
}
