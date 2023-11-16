import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

export default () => {
  const [nomeUsuario, setNomeUsuario] = useState(""); // Criando um useState para determinar que nomeUsuario deve corresponder ao valor inserido pelo usuário no input abaixo
  const [usuarioExiste, setUsuarioExiste] = useState(true);

  const handleSubmitFormulario = (event) => {
    event.preventDefault();
    setNomeUsuario(event.target.elements.user.value);
  };

  return (
    <div className="App">
      <form className="form-container" onSubmit={handleSubmitFormulario}>
        <label className="label" htmlFor="user">
          Busque por um nome de usuário:
        </label>
        <div className="search">
          <input
            className="input"
            type="text"
            id="user"
            // onBlur={(event) => setNomeUsuario(event.target.value)} // Quando o evento onBlur (preenchimento do input seguido de clique fora do campo) ocorre, dispara o evento setNomeUsuario, função que determina que nomeUsuario deve corresponder ao valor inserido pelo usuário no input
          />
          <button className="btn-search" type="submit">
            Buscar
          </button>
        </div>
      </form>
      {nomeUsuario.length >= 1 && ( // Condicionando a renderização dos repositórios somente quando um usuário for inserido no input
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          {/* Determinando que a prop nomeUsuario (utilizada nos componentes filhos dos componentes Perfil e ReposList) deve corresponder à nomeUsuario. Acima, nomeUsuario já foi definido como sendo o valor inserido pelo cliente no input */}
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </div>
  );
};
