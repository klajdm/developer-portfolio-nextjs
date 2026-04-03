import Head from "next/head";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | {siteConfig.name}</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center space-y-6 text-center px-4">
        <h1 className="text-8xl font-[Azonix] text-[#86906F] dark:text-[#a1b378]">
          404
        </h1>
        <h2 className="text-2xl font-semibold dark:text-white">
          Page Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="bg-[#86906F] hover:bg-[#90a06a] dark:bg-[#a1b378] dark:hover:bg-[#90a06a] text-white py-3 px-6 rounded-full tracking-wider transition-colors"
        >
          Go Home
        </Link>
      </div>
    </>
  );
}
