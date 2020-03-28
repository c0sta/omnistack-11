import React, { useEffect, useState } from "react";
import logoImg from "../../assets/logo.svg";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import "./Profile.css";
import { api } from "../../services/api";

export function Profile() {
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();
  const ongId = localStorage.getItem("ongId");

  const ongName = localStorage.getItem("ongName");
  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => setIncidents(response.data));
  }, [ongId]);

  const handleDeleteIncident = async id => {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert("Erro ao deletar caso, tente novamente!");
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the hero" />
        <span>Bem vindo, {ongName}</span>

        <Link to="/incidents/new" className="button">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={() => handleLogout()}>
          <FiPower size={18} color="#e02042" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map(({ id, title, description, value }) => (
          <li key={id}>
            <strong>CASO:</strong>
            <p>{title}</p>
            <strong>DESCRIÇÃO:</strong>
            <p>{description}</p>
            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(value)}
            </p>

            <button type="button" onClick={() => handleDeleteIncident(id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
