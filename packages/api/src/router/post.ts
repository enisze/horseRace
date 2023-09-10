import { HfInference } from "@huggingface/inference";

import { createTRPCRouter, publicProcedure } from "../trpc";

const hf = new HfInference("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");

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(async ({}) => {
    console.log("test");

    const res = await hf.textToImage({
      inputs: "human boxer in a ring high resolution photo",
      model: "stabilityai/stable-diffusion-xl-base-1.0",
      parameters: {
        negative_prompt: "low quality, bad quality, sketches",
        height: 512,
        width: 512,
      },
    });

    const base64Data = Buffer.from(await res.arrayBuffer()).toString("base64");

    return base64Data;
  }),
});
