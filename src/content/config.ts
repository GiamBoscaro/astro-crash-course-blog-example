import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    schema: ({image}) =>
        z.object({
            author: z.string(),
            date: z.string(),
            image: z.string(),
            title: z.string(),
        }),
});

export const collections = {
    posts: postsCollection,
}
