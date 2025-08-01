import React from "react";
import Board from "../components/chess/Board";
import Link from "next/link";

function Chess() {
  return (
    <div>
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
