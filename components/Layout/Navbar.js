import Link from "next/link";
import React, { Fragment } from "react";
import { FiMenu } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import ThemeSwitcher from "./ThemeSwitcher";
import { siteConfig } from "@/config/site.config";

const links = [
  { key: 1, href: "/", label: "Home" },
  { key: 2, href: "/#about", label: "About" },
  { key: 3, href: "/projects", label: "Projects" },
  { key: 4, href: "/resume", label: "Resume" },
  { key: 5, href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useRouter();

  const isActive = (href) => {
    if (href.includes("#")) return false;
    return pathname === href;
  };

  return (
    <nav className="fixed left-0 top-0 w-full z-[999]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] bg-white text-black px-4 py-2 rounded"
      >
        Skip to main content
      </a>
      <div className=" flex justify-between items-center px-5 lg:px-10 bg-white/80 shadow backdrop-blur-[3px] dark:bg-zinc-800/80">
        <div className="text-lg md:text-2xl font-[Azonix] uppercase">
          <Link href="/">
            <span>{"<"}</span>
            {siteConfig.name} <span>{"/>"}</span>
          </Link>
        </div>
        <div className="flex items-center h-16 space-x-5">
          <ul className="relative hidden h-full items-center lg:flex space-x-6 text-lg">
            {links.map((link) => (
              <Link
                className={`nav-link ${isActive(link.href) ? "nav-link-active" : ""}`}
                key={link.key}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
          <div className="flex justify-center items-center">
            <ThemeSwitcher />
          </div>
          <div className="lg:hidden cursor-pointer">
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center border px-2 py-2 rounded-md hover:bg-neutral-200 transition-all duration-300 dark:hover:bg-zinc-600 dark:border-zinc-600">
                <FiMenu size={18} />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-64 overflow-y-auto dark:bg-zinc-700">
                  <div className="p-1">
                    {links.map((link) => (
                      <Menu.Item key={link.href} as={Fragment}>
                        {({ active }) => (
                          <Link
                            href={link.href}
                            aria-current={
                              isActive(link.href) ? "page" : undefined
                            }
                            className={`group flex w-full justify-center rounded-lg items-center px-4 py-2 text-base ${
                              active || isActive(link.href)
                                ? "bg-[#c3d697] text-gray-900 dark:text-white"
                                : "text-gray-600 dark:text-white"
                            }`}
                          >
                            {link.label}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}
