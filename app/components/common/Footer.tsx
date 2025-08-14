import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full max-w-[600px] mx-auto my-16 grid grid-cols-1 sm:grid-cols-2 gap-10 px-2">
        <div>
          <h1 className="mb-4 text-2xl">Navigation</h1>
          <div className="text-gray-500 uppercase flex space-x-3 text-sm">
            <Link href={"/#work"}>work</Link>
            <Link href={"/#faq"}>About me</Link>
            <Link href={"/snippets"}>Snippets</Link>
          </div>
        </div>
        <div>
          <h1 className="mb-4 text-2xl">Other Projects</h1>
          <div className="text-gray-500 uppercase flex space-x-3 text-sm">
            <Link href={"https://github.com/dheeraj0007"} target="_blank">
              Visit my github
            </Link>
          </div>
        </div>
        <div>
          <h1 className="mb-4 text-2xl">Twitter</h1>
          <div className="text-gray-500 uppercase flex space-x-3 text-sm">
            <Link href={"https://x.com/dheeraj_gulati7"} target="_blank">
              @dheeraj_gulati7
            </Link>
          </div>
        </div>
        <div>
          <h1 className="mb-4 text-2xl">Linked In</h1>
          <div className="text-gray-500 uppercase flex space-x-3 text-sm">
            <Link
              href={"https://linkedin.com/in/dheerajgulati"}
              target="_blank"
            >
              Dheeraj gulati
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[600px] mx-auto my-16">
        <p>© 2024. All rights reserved</p>
        <p className="text-sm mt-4 text-gray-500">
          Designed by Dheeraj Gulati, built by Dheeraj Gulati. Inspired by the
          work of Tailwindcss
        </p>
      </div>
    </>
  );
}

export default Footer;
