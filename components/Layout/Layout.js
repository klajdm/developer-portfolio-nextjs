import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { siteConfig } from "@/config/site.config";

export default function Layout({ children }) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <>
      <div aria-hidden="true">
        <Particles
          id="particles-here"
          init={particlesInit}
          options={{
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#64748b",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#64748b",
                },
                polygon: {
                  nb_sides: 2,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.1,
                random: false,
                anim: {
                  enable: false,
                  speed: 0.8,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#64748b",
                opacity: 0.1,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "grab",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 0.1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
      <Head>
        <title>{siteConfig.name} - Portfolio</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${siteConfig.name} - Portfolio`} />
        <meta property="og:description" content={siteConfig.description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <div className="backdrop-blur-[1px]">
        <main id="main-content">
          <div className="relative max-h-full lg:max-w-7xl mx-5 lg:mx-auto pt-16 ">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
