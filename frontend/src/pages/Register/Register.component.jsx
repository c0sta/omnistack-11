import React from "react";
import "./Register.css";
import { api } from "../../services/api";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export const Register = props => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [whatsapp, setWhatsapp] = React.useState("");
  const [city, setCity] = React.useState("");
  const [uf, setUf] = React.useState("");

  const handleRegister = async event => {
    event.preventDefault();
    const data = { name, email, city, uf, whatsapp };
    try {
      const resp = await api.post("ongs", data);
      alert(`Seu ID foi cadastrado com sucesso: ${resp.data.id}`);
    } catch (error) {
      alert("Erro ao cadastrar. Tente novamente!", error);
    }
  };

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajudepessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            onChange={e => setName(e.target.value)}
            type="text"
            value={name}
            placeholder="Nome da ONG"
          />
          <input
            onChange={e => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="E-mail"
          />
          <input
            onChange={e => setWhatsapp(e.target.value)}
            placeholder="WhatsApp"
            value={whatsapp}
          />
          <div className="input-group">
            <input
              onChange={e => setCity(e.target.value)}
              placeholder="Cidade"
              value={city}
            />
            <input
              onChange={e => setUf(e.target.value)}
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};
