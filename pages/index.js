import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { sanityClient } from "@/config/sanity.config";
import { siteConfig } from "@/config/site.config";
import Head from "next/head";

export default function Home({ skills, bio }) {
  return (
    <>
      <Head>
        <title>{siteConfig.name} - Portfolio</title>
      </Head>
      {/* Hero */}
      <section id="hero" className="relative">
        <Hero bio={bio} />
      </section>

      {/* About */}
      <section id="about" className="relative ">
        <About skills={skills} />
      </section>

      {/* Contact */}
      <section id="contact" className="relative">
        <Contact />
      </section>
    </>
  );
}

export async function getStaticProps() {
  if (!sanityClient) {
    return { props: { skills: [], bio: [] } };
  }
  try {
    const client = sanityClient;
    // Fetch data for skills, bio, and projects using the Sanity client
    const skills = await client.fetch(`*[_type=='skill'] | order(_createdAt)`);
    const bio = await client.fetch(`*[_type=='bio']`);
    return {
      props: {
        skills,
        bio,
      },
      revalidate: 60,
    };
  } catch (error) {
    // Handle any errors that may occur during data fetching
    console.error("Error fetching data:", error);
    return {
      props: {
        skills: [],
        bio: [],
      },
      revalidate: 60,
    };
  }
}
