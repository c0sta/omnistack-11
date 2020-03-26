const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    // generating random id
    const id = crypto.randomBytes(4).toString("HEX"); // numeros e letras

    // connecting to database table & inserting data into it
    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
    return response.json({ id });
  },
  async index(request, response) {
    // connecting to database table & selecting data from it
    const ongs = await connection("ongs").select("*");
    return response.json(ongs);
  }
};
