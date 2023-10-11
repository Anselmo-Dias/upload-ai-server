import { FastifyInstance } from "fastify";
import {streamToResponse, OpenAIStream} from 'ai'
import { prisma } from "../lib/prisma";
import z from 'zod'
import { createReadStream } from 'node:fs'
import { openai } from "../lib/openia";

export async function generateAiCompletionRoute(app: FastifyInstance) {
  app.post('/ai/completion', async (req, reply) => {
    
    const bodySchema = z.object({
      videoId: z.string().uuid(),
      prompt: z.string(),
      temperature: z.number().min(0).max(1).default(0.5),
    })
    
    const { videoId, prompt, temperature } = bodySchema.parse(req.body)

    const video = await prisma.video.findFirstOrThrow({
      where: {
        id: videoId,
      }
    })

    if(!video.transcription) {
      return reply.status(500).send({error: 'Video transcription was not generate yet.'})
    }

    const promptMessage = prompt.replace('{transcription}', video.transcription)

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-16k',
      temperature,
      messages: [
        { role: 'user', content: promptMessage },
      ],
      stream: true,
    })

    const strem = OpenAIStream(response)

    streamToResponse(strem, reply.raw, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      }
    })
  })
}