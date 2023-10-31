# SpaceX-API-Challenge-Server by COODESH

Este é um projeto de exemplo que demonstra como configurar um ambiente de desenvolvimento local com Docker e Prisma para uma API Node.js que utiliza um banco de dados MySQL.

Esta API é um desafio proposto pela coodesh para utilização da SpaceX-API, para buscar lançamentos de foguetes.

## Backend

O backend deste projeto foi construído usando as seguintes tecnologias:

- **Node.js:** O ambiente de execução JavaScript que permite a construção de aplicativos do lado do servidor.
- **Express.js:** Um framework web para Node.js que simplifica a criação de APIs e aplicativos web.
- **Prisma:** Um ORM (Object-Relational Mapping) para banco de dados que facilita a interação com o banco de dados.
- **Swagger:** Uma ferramenta para documentação de APIs que torna a documentação e teste de endpoints mais fácil.
- **TypeScript:** Uma linguagem que adiciona tipagem estática ao JavaScript, trazendo maior segurança e inteligência ao
  desenvolvimento.
- **Axios:** Uma biblioteca para fazer requisições HTTP a partir do Node.js ou do navegador.
- **CORS:** Uma biblioteca para habilitar o controle de acesso a recursos de um servidor web a partir de diferentes origens, melhorando a segurança em aplicações web.

## Pré-requisitos

Antes de começar, certifique-se de que você tenha o seguinte instalado em sua máquina:

- Docker: [Instalação do Docker](https://docs.docker.com/get-docker/)
- Git: [Instalação do Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Node: [Instalação do Node](https://nodejs.org/pt-br/download/package-manager)

## Como Executar

Siga estas etapas cuidadosamente para configurar e executar o projeto em sua máquina:

### Configuração do Backend

1. **Clone o repositório:**

`git clone https://github.com/seu-usuario/seu-projeto.git`

2. **Configure as variáveis de ambiente:**

Dentro do diretório do projeto, crie um arquivo `.env` para armazenar suas variáveis de ambiente, incluindo as informações de conexão do banco de dados. Cole a URL a seguir no arquivo `.env` como exemplo (ajuste-a conforme necessário):

`DATABASE_URL=mysql://root:dbpass123@localhost:3306/database`

3. **Inicie o servidor backend:**

Dentro da pasta, execute os seguintes comandos no terminal:

`docker-compose build`
`docker-compose up`

## Acessando a Documentação da API

Este projeto utiliza o Swagger para documentar a API, facilitando a compreensão e o teste dos endpoints disponíveis. Siga as etapas abaixo para acessar a documentação da API:

1. **Inicie o servidor do projeto:**

   Certifique-se de que o servidor do projeto esteja em execução. Se você seguiu as etapas anteriores em "Como Executar", o servidor da API deve estar rodando na porta padrão `localhost:3000`.

2. **Acesse a documentação via navegador:**

   Abra o seu navegador da web de preferência e digite o seguinte URL:

`http://localhost:3000/api-docs`

Isso abrirá a interface Swagger UI, onde você poderá explorar a documentação da API de forma interativa. Você verá informações sobre os endpoints, as requisições suportadas, os parâmetros e as respostas.

3. **Teste os endpoints:**

Com a documentação aberta, você pode experimentar e testar os endpoints da API diretamente na interface Swagger UI. É uma ótima maneira de entender como a API funciona e verificar se tudo está funcionando conforme o esperado.

A documentação Swagger torna mais fácil para desenvolvedores e usuários entenderem a API e interagirem com ela de forma eficiente.

Lembre-se de atualizar esta seção com informações específicas sobre a sua API, se necessário, e certifique-se de que o servidor da API esteja em execução para que a documentação esteja disponível no endereço `localhost:3000/api-docs`.

Aproveite a exploração da sua API!
