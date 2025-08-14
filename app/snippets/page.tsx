import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "../components/snippets/header";
import Image from "next/image";
import Link from "next/link";

const Snippets = () => {
  const cards = [
    {
      logo: "/snippets/react.svg",
      title: "Toast",
      tagline: "A simple reusable notification toasts",
      link: "/snippets/toast",
    },
    {
      logo: "/snippets/react.svg",
      title: "Loader",
      tagline: "A simple reusable loader in React",
      link: "/snippets/loader",
    },
    {
      logo: "/snippets/react.svg",
      title: "Copy ",
      tagline: "A simple reusable copy function",
      link: "/snippets/copy-to-clipboard",
    },
  ];
  return (
    <div>
      <div className="mx-5">
        <Header />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10 mx-5 sm:mx-0">
        {cards.map((card, index) => {
          return (
            <Link href={card.link} key={index}>
              <Card>
                <CardHeader>
                  <Image
                    src={card.logo}
                    width={30}
                    height={30}
                    alt={card.title}
                  />
                </CardHeader>
                <CardFooter className="flex flex-col items-start">
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {card.tagline}
                  </CardDescription>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Snippets;
