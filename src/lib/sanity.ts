import { createClient } from "@sanity/client";

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const hasSanityConfig = Boolean(sanityProjectId && sanityProjectId !== "replace-me");

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: true,
      token: process.env.SANITY_API_READ_TOKEN
    })
  : null;
