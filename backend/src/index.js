const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const server = express();

// Informa o express que iremos utilizar JSON
server.use(express.json());
server.use(routes);
server.use(cors());
server.listen(3333);

/**
 * Rota / Recurso
 * recurso -> Ex: /users
 */

/**
 * Métodos HTTP
 * GET:  busca informações no backend
 * POST: cadastra informações no backend
 * PUT: atualiza/altera dados do backend
 * DELETE: deleta algo do backend
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?"(Filtros, Paginação, etc).  Ex. /users?name=Gabriel
 * Route Params: Parâmetros utilizados para identificar recursos. Ex: /users/:id
 * Request Body: Corpo da requisição usado para Criar ou Alterar recursos
 * request - guarda todos os dados que vem através da requisição
 * response - retorna uma resposta pro usuario
 */

/**
 * Bancos de dados
 * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
