import { HfInference } from '@huggingface/inference'

import { createTRPCRouter, publicProcedure } from '../trpc'

const hf = new HfInference(process.env.HUGGING_FACE_API_KEY)

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(async () => {
    const res = await hf.textToImage({
      inputs: 'human boxer in a ring high resolution photo',
      model: 'stabilityai/stable-diffusion-xl-base-1.0',
      parameters: {
        negative_prompt: 'low quality, bad quality, sketches',
        height: 512,
        width: 512,
      },
    })

    const base64Data = Buffer.from(await res.arrayBuffer()).toString('base64')

    return base64Data
  }),
})
