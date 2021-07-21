# Tarefas em background utilizando Node.js e Redis

![Preview](https://github.com/lucasdealmeidadev/Tarefas-em-background-utilizando-NodeJS-e-Redis/blob/main/register.png?raw=true)

Cadastro de usuário e envio de e-mail de confirmação de cadastro como tarefa em background utilizando Node.js. Esse projeto foi uma ampliação da aula ministrada por **Roberto Alves** na **Digital Innovation One**.

Foram adicionados os seguintes recursos ao projeto:

- Foi adicionado uma interface, para facilitar o procedimento de cadastro do usuário, utilizando as tecnologias **HTML**, **CSS** e **JS**;

- Para o gerenciamento dos templetes **HTML** foi utilizado o pacote **Express Handlebars**;

- Toda requição realizado e processada de maneira assincrona utilizado o cliente HTTP **Axios**;

- Por fim, foi utilizado a biblioteca SweetAlert para apresentar informações ao usuário.

## 🚀 Recursos Utilizados

* **[Axios](https://axios-http.com/docs/intro)**
* **[Javascript](https://www.javascript.com/)**
* **[Node.Js](https://nodejs.org/en/)**
* **[Express](http://expressjs.com/pt-br/)**
* **[Express Handlebars](https://github.com/express-handlebars/express-handlebars)**
* **[Redis](https://redis.io/)**
* **[BULL](https://github.com/OptimalBits/bull)**
* **[Mailtrap.io](https://mailtrap.io/)**
* **[Docker](https://www.docker.com/)**


## 🔥 Executando Localmente a Aplicação 

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

### 🌀 Começando... 

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

#### ❗️ Instalando as Dependências (via Windows): 

Abre o cmd (caso esteja utilizando o Windows) navegue até o local onde você clonou o projeto

```
cd "C:\Users\NomeDoComputador\Documents\cloneprojeto"
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução: **(dentro da pasta do projeto clonado)**

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas e definidas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.


### Criar container para o banco Redis com Docker
Execute no terminal para gerar o container:

```
> docker run --name redis -p 6379:6379 -d -t redis:alpine
```

### Arquivo .env
Altere o arquivo `.env.example` para `.env` 

#### 💨 Executando a Aplicação 

Bom, agora na mesma tela do cmd, basta iniciar o server para o projeto ser executado localmente.

```
> npm start
```
Abre um segundo terminal e execute:

```
> npm run queue
```

### Dependencias
Não será necessário instalar essas dependências caso você tenha efetuado o clone e as etapas descrito acima. 
```
yarn init -y
yarn add express nodemailer dotenv
yarn add express-handlebars
yarn add nodemon sucrase -D
yarn add password-generator
yarn add bull
yarn add bull-board
docker run --name redis -p 6379:6379 -d -t redis:alpine

```

## 🚩 Tenho Dúvidas... O que fazer? 

Caso tenham dúvidas sobre o código do projeto, sintam-se a vontade em abrir uma **[ISSUE AQUI](https://github.com/lucasdealmeidadev/Tarefas-em-background-utilizando-NodeJS-e-Redis/issues)**. Assim que possível, estarei respondendo as todas as dúvidas que tiverem!

## Autor:

* [**Lucas de Almeida Monteiro**](https://github.com/lucasdealmeidadev)

## Licença

* Licenciado sob a licença MIT - veja [LICENSE](https://github.com/lucasdealmeidadev/Tarefas-em-background-utilizando-NodeJS-e-Redis/blob/main/LICENSE) para mais informações.