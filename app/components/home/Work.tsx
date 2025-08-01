import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Projects() {
  const projects = [
    {
      title: "Capilus India",
      headline: "A platform for the best hair extensions in India.",
      img: "/projects/capilus.png",
      techStack: ["Nextjs, Typescript", "Medusajs", "Payload", "Postgres"],
      url: "https://capilus.in/",
    },
    {
      title: "Ecoachhinna",
      headline: "A platform for personality development and self improvement.",
      img: "/projects/ecoachhinna.png",
      techStack: ["Nextjs, Typescript", "Sanity.io", "Tailwindcss", "Zustand"],
      url: "https://ecoachhinna.in/",
    },
    {
      title: "Ditly",
      headline: "A URL shortner service with qrcode generation.",
      img: "/projects/ditly.png",
      techStack: [
        "Nextjs, Typescript",
        "Next-Auth",
        "Prisma, Postgresql",
        "Shadcn ui",
      ],
      url: "https://ditly.vercel.app/",
    },
    {
      title: "Amazon Clone",
      headline: "An amazon clone",
      img: "/projects/amazon.png",
      techStack: [
        "Nextjs, Typescript",
        "Next-Auth",
        "Razorpay ",
        "Prisma, Postgresql",
      ],
      url: "https://amazon-clone2-xi.vercel.app/",
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-medium tracking-tighter md:mt-5">
        Some Of my work
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 my-10">
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              className="p-6 rounded-2xl bg-white  w-full border-[1px] border-gray-100 space-y-5"
            >
              <h1 className="text-xl font-medium tracking-tight">
                {project.title}
              </h1>
              <p className="text-xs text-gray-500">{project.headline}</p>
              <Image
                src={project.img}
                width={220}
                height={220}
                alt={project.title}
              />
              <div>
                <h1 className="uppercase mb-3">Tech Stack:</h1>
                <ul>
                  {project.techStack.map((tech) => {
                    return (
                      <li key={tech} className="text-[15px] flex items-center">
                        <span className="w-3 h-[1px] mr-2 bg-black"></span>
                        <span>{tech}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <Link
                className="flex text-gray-500 justify-between items-center w-full border-[1px] border-gray-100 px-3 py-2 rounded-full hover:text-white hover:bg-black transition-colors duration-300"
                href={project.url}
                target="_blank"
              >
                <span>Visit site </span>
                <ArrowRight className="size-5" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
