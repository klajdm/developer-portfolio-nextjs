import Link from "next/link";
import React from "react";
import Skill from "./Skill";

export default function About({ skills }) {
  return (
    <div className="min-h-screen  relative flex justify-center items-center top-16 mb-16 lg:top-0 lg:mb-0">
      <div className="relative flex flex-col  lg:space-y-36 ">
        <div className=" flex flex-col justify-center items-center space-y-10">
          <h1 className="font-[NunitoMD] custom-h1 mt-10 md:mt-16 dark:text-white">
            About Me
          </h1>
          <p className="max-w-xl text-center text-base">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className=" relative flex flex-col lg:flex-row lg:space-x-28 lg:mx-16">
          <div className="md:mx-auto space-y-7 lg:space-y-14 max-w-lg mt-7 lg:mt-0">
            <h4 className="text-xl">Get to know me!</h4>
            <div className="space-y-3 text-base">
              <p>
                I&apos;m a frontend developer but also like to call myself a
                visual artist. My journey has taken me from creating digital
                visuals to designing and developing websites.
              </p>{" "}
              <p>
                {" "}
                I find joy in bringing together the worlds of creativity and
                technology, crafting user-friendly and visually pleasing online
                experiences. Through my journey, I&apos;ve learned to balance
                aesthetics and functionality, creating online experiences that
                resonate with users.
              </p>{" "}
              <p>
                My background in visual art gives me a unique perspective on
                design, allowing me to bring a creative touch to every project I
                work on. Ultimately, my goal is to create digital experiences
                that are not just visually pleasing, but also intuitive and
                engaging.
              </p>
            </div>
            <div className="relative w-fit active:top-1">
              <Link
                href="/#contact"
                className="bg-[#86906F] hover:bg-[#90a06a] text-neutral-100 py-3 px-5 lg:px-8 md:text-lg rounded-full shadow-md active:shadow-none tracking-wider dark:bg-[#a1b378] dark:hover:bg-[#90a06a] inline-block"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="space-y-7 lg:space-y-14 mt-7 lg:mt-0">
            <h4 className="text-xl">Skills & tools</h4>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-5">
              {skills?.map((skill) => (
                <Skill key={skill._id} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
