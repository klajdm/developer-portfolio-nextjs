import React from "react";
import Image from "next/image";
import { urlFor } from "@/config/sanity.config";

export default function Skill({ skill }) {
  const src = urlFor ? urlFor(skill.image).url() : null;

  return (
    <div
      className=" relative flex justify-center items-center flex-grow rounded-full border border-[#86906F] dark:border-[#a1b378] w-16 h-16 lg:w-24 lg:h-24 hover:scale-105 transition duration-300 ease-in-out cursor-pointer group"
      title={skill.title}
    >
      {src && (
        <Image
          className=" w-10 h-auto lg:w-16 lg:h-auto filter object-cover "
          src={src}
          width={64}
          height={64}
          alt={skill.title ?? "Skill"}
        />
      )}
      {skill.title && (
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-zinc-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10 pointer-events-none">
          {skill.title}
        </span>
      )}
    </div>
  );
}
