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
    - 

## Como Executar a Aplicação

Siga os passos abaixo para executar a aplicação no seu ambiente local.

1. **Pré-requisitos**:
   - Liste quaisquer pré-requisitos, como versões específicas de software, que o usuário deve ter instalado antes de seguir as instruções. Exemplo: Node.js, NPM, etc.

2. **Clonar o Repositório**:
  - git clone https://github.com/seu-usuario/seu-repositorio.git

3. **Navegar para o Diretório do Projeto**:
  - cd seu-repositorio

4. **Instalar Dependências**:
 - npm install

5. **Iniciar a Aplicação**:
 - npm run dev


6. Acesse a aplicação em seu navegador, geralmente em [http://localhost:3000](http://localhost:3000).

## Mídia

Inclua imagens, GIFs ou vídeos que demonstrem a aparência e o funcionamento da sua aplicação. Você pode carregar esses arquivos no seu repositório e adicionar os links a eles aqui.

![Captura de Tela 1](/screenshots/screenshot1.png)
![Captura de Tela 2](/screenshots/screenshot2.png)

## Contribuição

Se você deseja contribuir para o projeto, siga as diretrizes de contribuição (se houver) e as informações sobre como as contribuições são bem-vindas

## Licença

Este projeto está licenciado sob a [Nome da Licença](URL da Licença) - Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.


