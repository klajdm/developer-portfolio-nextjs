import Link from "next/link";
import React from "react";
import { HiMiniHome } from "react-icons/hi2";
import { siteConfig } from "@/config/site.config";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <footer className="relative">
      <button
        type="button"
        onClick={scrollToTop}
        className="scroll-top"
        aria-label="Scroll to top"
      >
        <div className=" flex justify-center items-center w-[40px] h-[40px] rounded-full dark:text-black dark:hover:text-white">
          <HiMiniHome size={20} />
        </div>
      </button>
      <div className="relative flex w-full justify-center text-xs py-4 bg-white dark:bg-zinc-700">
        <p>
          &copy; Copyright {new Date().getFullYear()}. Made by{" "}
          <span className="underline font-bold">
            <Link href="/">{siteConfig.name}</Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
