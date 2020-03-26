const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { title, description, value } = request.body;
    // Informações sobre o contexto da sessão, ex: autenticação, idioma do navegador, etc. Ficam contidos
    // no cabeçalho (request.headers) da aplicação
    const ong_id = request.headers.authorization;

    // conectando no banco e inserindo os dados recebidos no
    // corpo da request
    const result = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });
    const id = result[0];
    return response.json({ id });
  },
  async index(request, response) {
    const incidents = await connection("incidents").select("*");

    return response.json(incidents);
  }
};
