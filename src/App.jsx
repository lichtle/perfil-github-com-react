import { useState } from "react";

import Formulario from "./components/Formulario";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  return (
    <div className="App">
      <Perfil nomeUsuario="lichtle" />
      <ReposList nomeUsuario="lichtle" />
      {/* {formularioEstaVisivel && <Formulario />}
      <button
        type="button"
        onClick={() => {
          setFormularioEstaVisivel(!formularioEstaVisivel); // Criando a função de alternância (toggle) da visibilidade do componente "Formulário"
        }}
      >
        Toggle formulário
      </button> */}
    </div>
  );
}

export default App;
