import "server-only";
/*
Draft mode allows one to preview draft content from your headless CMS in Next js application
This is useful for static pages that are generated at build time as it allows one to switch to dynamic rendering and see
the draft changes without having to rebuild your entire site. */
import type { QueryParams } from "@sanity/client"; // helps with typescript type safety when passing query parameters
import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";

const DEFAULT_PARAMS = {} as QueryParams; //an empty object, used as a fallback for query parameters
const DEFAULT_TAGS = [] as string[]; // An empty array, used for caching purposes in Next.js

const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  const isDraftMode = await draftMode();
  isDraftMode.enable();
  if (isDraftMode && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required."
    );
  }
  const isDevelopment = process.env.NODE_ENV === "development";

  /*Caching strategy.
  If in development mode or draft mode, caching is  disabled( cache: undefined)
  otherwise, it  uses Next.js "force-cache", meaning data is cached aggressively for performance */
  return client
    .withConfig({ useCdn: true }) // uses Sanity's CDN for caching, improving performance for published content.
    .fetch<QueryResponse>(query, params, {
      cache: isDevelopment || isDraftMode ? undefined : "force-cache",
      /*If draft mode is enabled
      use the API token to fetch unplushed content
      set perspective:'previewDrafts' to include drafts in the query */
      ...(isDraftMode && {
        token: token,
        perspective: "previewDrafts",
      }),
      /*Revalidation for Draft Mode */
      next: {
        ...(isDraftMode && { revalidate: 120 }),
        tags,
      },
    });
}
