import Project from "@/components/Project";
import { sanityClient } from "@/config/sanity.config";
import Head from "next/head";
import React from "react";

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>Klajdi Murataj - Projects</title>
      </Head>
      <Project projects={projects} />
    </>
  );
}

export async function getStaticProps() {
  if (!sanityClient) {
    return { props: { projects: [] } };
  }
  try {
    const client = sanityClient;
    // Fetch data for skills, bio, and projects using the Sanity client
    const projects = await client.fetch(
      `*[_type=='project'] | order(_createdAt)`,
    );

    return {
      props: {
        projects,
      },
    };
  } catch (error) {
    // Handle any errors that may occur during data fetching
    console.error("Error fetching data:", error);
    return {
      props: {
        projects: [],
      },
    };
  }
}
