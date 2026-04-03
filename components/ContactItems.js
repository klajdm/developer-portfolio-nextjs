import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { siteConfig } from "@/config/site.config";

const platformIcons = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  instagram: FaInstagram,
  twitter: FaTwitter,
};

export default function ContactItems() {
  return (
    <div>
      <div className="relative flex flex-col space-y-4 ">
        {siteConfig.social.map(({ platform, label, href }) => {
          const Icon = platformIcons[platform];
          return (
            <Link
              key={platform}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="item-btn dark:hover:bg-[#a1b378]"
            >
              {Icon && <Icon className="ico" />}
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
