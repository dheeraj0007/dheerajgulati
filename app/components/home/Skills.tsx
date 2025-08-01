import Image from "next/image";
import React from "react";

function Skills() {
  const skills = [
    {
      src: "./home/nextjs.svg",
      alt: "nextjs",
    },
    {
      src: "./home/angular.svg",
      alt: "angular",
    },
    {
      src: "./home/nodejs.svg",
      alt: "nodejs",
    },
    {
      src: "./home/reactjs.svg",
      alt: "reactjs",
    },
    {
      src: "./home/tailwindcss.svg",
      alt: "tailwindcss",
    },
    {
      src: "./home/typescript.svg",
      alt: "typescript",
    },
  ];
  return (
    <div className="grid grid-cols-2 rounded-lg bg-white w-3/4 mx-auto my-14">
      {skills.map((skill) => {
        return (
          <div
            key={skill.alt}
            className="flex items-center justify-center p-4 border-collapse border-[0.5px] border-gray-50"
          >
            <Image src={skill.src} width={75} height={75} alt={skill.alt} />
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
