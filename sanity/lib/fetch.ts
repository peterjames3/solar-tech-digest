import "server-only";
/*
Draft mode allows one to preview draft content from your headless CMS in Next js application
This is useful for static pages that are generated at build time as it allows one to switch to dynamic rendering and see
the draft changes without having to rebuild your entire site. */
import type { QueryParams } from "@sanity/client";
import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export const token = process.env.SANITY_API_READ_TOKEN;

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

  return client
    .withConfig({ useCdn: true })
    .fetch<QueryResponse>(query, params, {
      cache: isDevelopment || isDraftMode ? undefined : "force-cache",
      ...(isDraftMode && {
        token: token,
        perspective: "previewDrafts",
      }),
      next: {
        ...(isDraftMode && { revalidate: 120 }),
        tags,
      },
    });
}
