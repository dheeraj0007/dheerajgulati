import React from "react";
import Navbar from "../components/Navbar";
import Board from "../components/Board";
import Link from "next/link";

function Chess() {
  return (
    <div>
      <div className="sticky top-3 z-50 w-full px-4 sm:px-0 flex justify-center items-center flex-col">
        <Navbar />
      </div>
      <div className="w-full h-full md:w-[480px] md:h-[480px] mx-auto my-5 bg-white shadow-sm py-5 md:p-8 mt-10">
        <Board />
      </div>
      <div className="text-center">
        <Link
          href={"https://www.chess.com/member/dheerajgulati7"}
          className=" italic underline text-sm"
          target="_blank"
        >
          Connect with me on Chess.com
        </Link>
      </div>
    </div>
  );
}

export default Chess;
