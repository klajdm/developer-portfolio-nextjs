import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;

const isSanityConfigured =
  projectId && /^[a-z0-9-]+$/.test(projectId) && dataset;

export const config = {
  projectId: isSanityConfigured ? projectId : "placeholder",
  dataset: isSanityConfigured ? dataset : "production",
  apiVersion: "2023-07-31",
  useCdn: false,
  basePath: "/admin",
};

export const sanityClient = isSanityConfigured ? createClient(config) : null;

export const urlFor = (source) =>
  isSanityConfigured ? imageUrlBuilder(config).image(source) : null;
