import Header from "./components/home/Header";
import Link from "next/link";
import Skills from "./components/home/Skills";
import Projects from "./components/home/Work";

export default function Home() {
  return (
    <div className="w-full max-w-[600px] mx-auto mt-16">
      {" "}
      <div className="mx-4">
        <Header />
      </div>
      <div className="mt-5 p-3 text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-2 mx-4">
        <p>
          I am a full-stack developer. I have a passion for developing and
          designing websites and applications. I have experience in developing
          websites and applications using modern technologies.
        </p>
        <p>
          Say goodbye to phone calls and extensive contracts; reach out to me
          anytime you need help. I am here to help you with your project.
        </p>
      </div>
      <div className="mx-4 mt-3">
        <Link
          href={"https://cal.com/dheerajgulati"}
          className="text-sm py-1 px-2 italic flex items-center w-fit hover:underline"
          target="_blank"
        >
          <span>Lets work together</span>
          <span className="w-2 h-2 rounded-full bg-black ml-2"></span>
          <span className="w-2 h-2 rounded-full bg-white border-2 border-black  ml-1"></span>
          <span className="w-4 h-[1px] ml-1 bg-black"></span>
          <span>You will be happy.</span>
        </Link>
      </div>
      <div className="mx-4">
        <Skills />
      </div>
      <div className="mx-4">
        <Projects />
      </div>
    </div>
  );
}
