// Levantando os parâmetros de ambiente
require("dotenv").config();

// importando roteadores
const AuthRouter = require('./routes/AuthRouter');

// Trazendo dependências
const path = require("path");
const express = require('express');

// Criando o app express
const app = express();

// Configurando pasta public para requisições estáticas
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// configurando roteadores
app.use('/', AuthRouter);

// Levantando o servidor
app.listen(process.env.HTTP_PORT);
