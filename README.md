# Upload-ai-server

Este readme está em andamento...

## O que foi usado na Aplicação

- node
- fastify
- prisma
- zod
- typescript

## Rotas

1. **Pegar prompts**
  - `/prompts`
    - Essa rota de back-end tem a finalidade de buscar e retornar uma lista de prompts (mensagens ou instruções) armazenados no banco de dados. Ela responde a uma solicitação HTTP GET na rota '/prompts' e não requer a passagem de parâmetros na solicitação.
    - 
   
2. **Upload de video**
  - `/videos`
    - Essa rota de back-end tem a finalidade de permitir o upload de arquivos de vídeo no formato MP3. Ela responde a uma solicitação HTTP POST na rota '/videos' e lida com o envio de arquivos de vídeo por parte dos usuários. A rota aceita um arquivo de vídeo no formato MP3 e realiza as seguintes operações:
        -  Configuração de Limites de Tamanho do Arquivo
        -  Tratamento do Arquivo Enviado
        -  Validação do Formato do Arquivo
        -  Geração de Nomes de Arquivos Únicos
        -  Upload do Arquivo
        -  Criação de Registro no Banco de Dados
        -  Resposta ao Cliente
    - Em resumo, essa rota de back-end permite que os usuários carreguem arquivos de vídeo no formato MP3, armazena esses arquivos no servidor em um diretório temporário e registra as informações do vídeo no banco de dados. Ela é útil para a preparação de arquivos de vídeo para processamento posterior em um aplicativo ou serviço.
    - 

3. **Criação de transcrição**:
- `/videos/:videoId/transcription`
  - Essa rota de back-end tem a finalidade de criar uma transcrição de áudio a partir de um vídeo identificado pelo parâmetro **videoId**
  - Em resumo, essa rota aceita uma solicitação para transcrever o áudio de um vídeo com base no videoId vindo do pararametro fornecido e na instrução prompt que vem do corpo da requisição. Ela envia o áudio para a API da OpenAI e retorna a transcrição resultante, atualizando simultaneamente os dados do vídeo com a transcrição gerada. Se houver erros durante esse processo, a rota retorna uma resposta de erro com um status 500 e uma mensagem de erro.
  - 

 4. **Criação do conteúdo pela AI**
  - `/ai/completion`
    -  Essa rota de back-end tem a finalidade de gerar completions (ou preenchimentos) de texto usando um modelo de linguagem da OpenAI.
        - Corpo da Requisição (Request Body):
            - **videoId**: Um identificador único (UUID) associado a um vídeo.
            - **prompt**: Uma string que representa uma mensagem ou instrução inicial para o modelo de linguagem.
            - **temperature**: Um número que controla a "criatividade" das respostas geradas, com um valor padrão de 0.5 e faixa entre 0 e 1.
    - Em resumo, esta rota de back-end recebe uma solicitação para gerar completions de texto usando um modelo de linguagem da OpenAI com base em um vídeo identificado pelo videoId. Ela cria uma mensagem de prompt que pode incluir a transcrição do vídeo, envia a solicitação para a OpenAI e retorna as respostas geradas para o cliente. Se a transcrição do vídeo não estiver disponível, a rota retorna um erro. A "temperatura" é um parâmetro opcional que afeta a diversidade das respostas geradas.
      

## Como Executar a Aplicação

Siga os passos abaixo para executar a aplicação no seu ambiente local.

1. **Pré-requisitos**:
   - faça uma conta na [OpenAI](https://openai.com/)
   - depois de fazer login, vá na opção api
      - ![image](https://github.com/Anselmo-Dias/upload-ai-server/assets/96529532/cbb7d703-95b6-47db-a25c-e8006f654e8a)
   - Acesse a opção view keys
      - ![image](https://github.com/Anselmo-Dias/upload-ai-server/assets/96529532/d60801f1-ca91-4585-8169-d3cc6d1e6176)
   - E crie uma key
      - ![image](https://github.com/Anselmo-Dias/upload-ai-server/assets/96529532/79672a7a-0c82-4534-b0e9-c7dea8900c45)
   - Você deve copiar essa key, e depois de fazer download do projeto, coloque essa key no arquivo `.env`
 
2. **Clonar o Repositório**:
  - `git clone https://github.com/Anselmo-Dias/upload-ai-server.git`

3. **Navegar para o Diretório do Projeto**:
  - `cd nome-do-repositorio`

4. **Instalar Dependências**:
 - `npm install` ou `npm i`

5. **Iniciar a Aplicação**:
 - npm run dev


6. A aplicação vai está rodando em [http://localhost:3000](http://localhost:3000).

## Mídia

![upload-ai](https://github.com/Anselmo-Dias/upload-ai-server/assets/96529532/47ed3804-8a26-46ef-9efb-436ddefe8b5d)

## :memo: License

Este projeto esta sob a [MIT license](LICENSE) para mais detalhes.
<br />
<br />

## :iphone: Social

Siga -me no instagram
<br />
