import BlogPage from "../components/BlogPage";

function Blogs() {
  return (
    <div>
      <div className="px-4 py-40 bg-black mx-auto text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Blog Page
        </h1>
      </div>
      {/* all blog container */}
      <div className=" max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
}

export default Blogs;
