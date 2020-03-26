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
    const { page = 1, itensPerPage = 5 } = request.query;

    // para pegar o valor da primeira posição de um Array
    const [count] = await connection("incidents").count();
    console.log(count);

    const incidents = await connection("incidents")
      .join("ongs")
      .limit(itensPerPage) // define quantidade maxima de itens a retornar do banco
      .offset((page - 1) * itensPerPage) // resolve o problema da página inicial ser 1 e no backend 0. Ex: 2 - 1 = 1*5 = 5
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);

    response.header("X-Total-Count", count["count(*)"]);
    return response.json(incidents);
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();
    if (incident.ong_id !== ong_id) {
      return response.status(401).json({ error: "Operation not allowed" });
    }

    await connection("incidents")
      .where("id", id)
      .delete();

    return response.status(204).send();
  }
};
