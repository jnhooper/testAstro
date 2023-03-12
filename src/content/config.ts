import {z, defineCollection} from "astro:content";

export const collections = {
  // i think this needs to match the folder name
  'dev': defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.date()
    })
  })
}
