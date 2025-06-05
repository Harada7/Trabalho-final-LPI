# Projeto CRUD de Livros

Este é um projeto simples de CRUD (Create, Read, Update, Delete) de livros utilizando **MongoDB**, **Node.js (Express)** e **React**. A aplicação permite adicionar, visualizar, editar e excluir livros de uma lista armazenada em um banco de dados MongoDB.

## Tecnologias Utilizadas

- **Frontend**: React, Axios, TailwindCSS
- **Backend**: Node.js, Express, Mongoose
- **Banco de dados**: MongoDB

---

## Estrutura do Projeto

TRABALHO-FINAL-LPI/
├── client/ # Frontend React
│ ├── public/
│ ├── src/
│ ├── index.html
│ ├── vite.config.js
│ └── tailwind.config.js
│
├── server/ # Backend Node.js + Express
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── index.js
│ └── .env
│
├── README.md # Documentação

---

## Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Harada7/Trabalho-final-LPI.git
cd Trabalho-final-LPI

```
###  2. Instale as dependências
Backend
cd server
npm install

###  3. Instale as dependências
Backend
cd client
npm install

### 4. Configure o ambiente
Crie um arquivo .env na pasta server/ com o seguinte conteúdo:

MONGO_URI=<sua_connection_string_do_MongoDB>


### 5. Inicie os servidores

Backend
cd server
npm run dev

Frontend
cd client
npm run dev

---

## API - Endpoints

| Método | Rota         | Descrição                   |
|--------|--------------|-----------------------------|
| GET    | /            | Lista todos os livros       |
| GET    | /:id         | Busca um livro específico   |
| POST   | /            | Cadastra um novo livro      |
| PUT    | /:id         | Atualiza um livro existente |
| DELETE | /:id         | Deleta um livro             |

### Exemplo de JSON:

{
  "titulo": "O Senhor dos Anéis",
  "autor": "J.R.R. Tolkien",
  "ano": 1954
}

---

##  Funcionalidades

- Cadastrar novo livro

- Listar livros existentes

- Editar livro

- Remover livro

---

## 📋 Licença
Projeto feito para fins educacionais. Livre para uso.