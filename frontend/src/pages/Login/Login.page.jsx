import React, { useState } from "react";
import "./Login.css";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { api } from "../../services/api";

export const Login = props => {
  const [id, setId] = useState("");
  const history = useHistory();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const response = await api.post("sessions", { id });
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name || "APAD");
      history.push("/profile");
    } catch (error) {
      alert("Falha no login, tente novamente! ;(");
    }
  };

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Heroes logo" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input
            placeholder="Seu ID"
            onChange={e => setId(e.target.value)}
            value={id}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes logo" />
    </div>
  );
};
