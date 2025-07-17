import React from "react";
import Navbar from "../components/Navbar";
import BlogHeader from "../components/BlogHeader";

function Blogs() {
  return (
    <div>
      <div className="sticky top-3 z-50 w-full px-4 sm:px-0 flex justify-center items-center flex-col h-full">
        <Navbar />
      </div>
      <div className="mx-3">
        <BlogHeader />
      </div>
    </div>
  );
}

export default Blogs;
