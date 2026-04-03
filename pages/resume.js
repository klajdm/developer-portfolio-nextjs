import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FiDownload } from "react-icons/fi";
import { siteConfig } from "@/config/site.config";

export default function Resume() {
  const pdfSrc = siteConfig.resumeFile;

  return (
    <>
      <Head>
        <title>{`${siteConfig.name} - Resume`}</title>
      </Head>
      <div className="min-h-screen relative flex flex-col items-center md:justify-center ">
        <h1 className="relative custom-h1 font-[NunitoMD] text-center w-fit my-10 dark:text-white">
          Curriculum Vitae
        </h1>
        <div className=" w-[95%] h-[564px] md:w-[85%] md:h-[1064px] lg:w-[720px] relative mb-20">
          <Link
            href={pdfSrc}
            target="_blank"
            aria-label="Download resume"
            className="animate"
          >
            <div className="absolute bg-[#86906F] hover:bg-[#90a06a] dark:bg-[#a1b378] dark:hover:bg-[#90a06a] text-white w-12 h-12 rounded-full shadow-lg z-10 flex justify-center items-center right-[-1rem] top-[-1.3rem] hover:scale-105 cursor-pointer text-xl">
              <FiDownload />
            </div>
          </Link>
          <iframe
            src={`${pdfSrc}#toolbar=0`}
            title="Resume"
            width={"100%"}
            height={"100%"}
            style={{
              position: "relative",
              borderRadius: "8px",
              border: "2px solid rgba(255, 255, 255, 0.5)",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              background: "#fff",
            }}
          />
        </div>
        <p className="text-center text-sm text-gray-400 dark:text-gray-500 mb-10 -mt-10">
          Can&apos;t see the PDF?{" "}
          <Link
            href={pdfSrc}
            target="_blank"
            className="underline text-[#86906F] dark:text-[#a1b378]"
          >
            Open in new tab
          </Link>
        </p>
      </div>
    </>
  );
}
