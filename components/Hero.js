import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { urlFor } from "@/config/sanity.config";
import Typewriter from "typewriter-effect";

export default function Hero({ bio }) {
  const imageStyle = {
    backgroundImage:
      urlFor && bio?.length
        ? `url(${bio.map((info) => urlFor(info.image).url())})`
        : undefined,
  };

  return (
    <div className="relative min-h-screen w-full mx-auto">
      <div className="flex absolute justify-center w-full items-center md:top-[25%]">
        <div>
          <div className="flex flex-col-reverse md:flex-row md:space-x-10 items-center">
            <div className="space-y-4 ">
              <div className="space-y-4">
                <h1 className="text-3xl text-center font-[Poppins] md:text-start lg:text-6xl font-semibold">
                  Hi, I&apos;m Klajdi Murataj
                </h1>
                <div className="flex justify-center md:justify-start">
                  <h3 className="text-base md:text-lg lg:text-2xl bg-white rounded-xl w-fit p-2 dark:bg-zinc-600">
                    <Typewriter
                      options={{
                        strings: [
                          "A Frontend focused Web Developer",
                          "Full-stack to be",
                          "Welcome to my webpage",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                      }}
                    />
                  </h3>
                </div>
              </div>
              {bio.map((bioInfo) => (
                <div
                  key={bioInfo._id}
                  className="lg:max-w-2xl md:max-w-lg text-base"
                >
                  <p>{bioInfo.info}</p>
                </div>
              ))}
            </div>

            <div
              style={imageStyle}
              className="hero-img dark:border-white"
            ></div>
          </div>
          <div className="relative w-fit active:top-1 my-5 md:my-0">
            <Link href="/projects">
              <button className="bg-[#86906F] hover:bg-[#90a06a] text-neutral-100 p-3 md:text-lg rounded-full shadow-md active:shadow-none tracking-wider dark:bg-[#a1b378] dark:hover:bg-[#90a06a]">
                My Portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[12%] w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[25px] h-[40px] rounded-3xl border-2 border-lime-800/60 dark:border-[#a1b378]/80  flex justify-center items-start p-2  ">
            <motion.div
              animate={{
                y: [0, 17, 0],
                opacity: [1, 0, 0],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-[6px] h-[6px] rounded-full bg-lime-800/60 mb-1 dark:bg-[#a1b378]"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
