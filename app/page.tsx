import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      {" "}
      <div className="sticky top-3 z-50 w-full px-4 sm:px-0 flex justify-center items-center flex-col">
        <Navbar />
      </div>
      <div className="mx-3">
        <Header />
      </div>
    </div>
  );
}
