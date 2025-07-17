import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="p-4 w-full max-w-[600px] mx-auto mt-16 shadow-sm">
      <div className="flex flex-col-reverse md:flex-row justify-between space-y-3">
        <div>
          <h1 className="font-bold text-2xl md:text-4xl">Dheeraj Gulati</h1>
          <p className="text-gray-600 mt-2">
            I Design & develop The Frontend / Backend
          </p>
        </div>
        <div>
          <Image
            src={"/profile.png"}
            width={80}
            height={80}
            alt="profile"
            className="rounded-sm mb-5 md:mb-0"
          />
        </div>
      </div>
      <div>
        <Link
          href={"/chess"}
          className="text-sm py-1 px-2 bg-white rounded-full border-[1px] border-gray-200 flex items-center w-fit hover:underline"
        >
          <span>Play Chess here </span>
          <span className="w-2 h-2 rounded-full bg-black ml-2"></span>
          <span className="w-2 h-2 rounded-full bg-white border-2 border-black  ml-1"></span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
