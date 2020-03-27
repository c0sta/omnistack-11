import React from "react";
import "./Login.css";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

export const Login = props => {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Heroes logo" />

        <form>
          <h1>Faça seu login</h1>
          <input placeholder="Seu ID" />
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
