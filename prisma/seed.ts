import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  await prisma.prompt.deleteMany()

  await prisma.prompt.create({
    data: {
      title: 'Titulo do Youtube',
      template: `Seu papel é gerar très titulos para um vídeo do YouTube.
      Abaixo você receberá uma transcrição desse video, use essa transcrição para gerar os titulos.
      Abaixo você também receberar uma lista de títulos, use essa lista como referência para os títulos a srem gerados.

      Os títulos devem contér ter no máximo 60 caracteres.
      Os títulos devem ser chamativos e atrativos para maximizar os cliques.

      Retorne APENAS os três titulos em formato de lista como no exemplo abaixo:
      '''
      - Título 1
      - Título 2
      - Título 3
      '''

      Transcrição:
      '''
      {transcription}
      '''
      `
    }
  })
}

main()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (err) => {
  console.log(err)
  await prisma.$disconnect()
  process.exit(1)
})