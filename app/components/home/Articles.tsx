import Link from "next/link";
import React from "react";

const Articles = () => {
  return (
    <div className="my-16 bg-black rounded-4xl tracking-tighter flex flex-col justify-center items-center w-full h-72 text-center">
      <h1 className="text-4xl text-white ">Liked My work?</h1>
      <p className="text-3xl tracking-tight text-gray-200">
        Please read my tech articles too..
      </p>
      <p className="text-gray-200 tracking-tighter w-2/3 mx-auto mt-5">
        I write articles on various topics like web development, programming,
        and tech. I share my knowledge and experience with the community.
      </p>
      <Link
        href={"/blogs"}
        className="bg-white py-2 px-3 rounded-full mt-5 text-gray-700"
        target="_blank"
      >
        Read Articles
      </Link>
    </div>
  );
};

export default Articles;
