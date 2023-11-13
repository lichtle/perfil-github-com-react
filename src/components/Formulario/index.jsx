import { useEffect, useState } from "react";

const Formulario = () => {
  let [materiaA, setMateriaA] = useState(0);
  let [materiaB, setMateriaB] = useState(0);
  let [materiaC, setMateriaC] = useState(0);
  let [nome, setNome] = useState("");

  useEffect(() => {
    console.log("Um estado foi alterado");

    return () => {
      console.log("O componente foi desmontado")
    }
  }, []);

  const renderizarResultado = () => {
    const media = (materiaA + materiaB + materiaC) / 3;

    if (media >= 7) {
      return <p>{nome}, você foi aprovado(a).</p>;
    } else {
      return <p>{nome}, você não foi aprovado(a).</p>;
    }
  };

  const alterarNome = (evento) => {
    setNome(evento.target.value);
  };

  return (
    <form>
      <input type="text" placeholder="Seu nome" onChange={alterarNome} />
      <br />
      <input
        type="number"
        placeholder="Nota na matéria A"
        onChange={(evento) => setMateriaA(parseInt(evento.target.value))} // Aqui poderíamos utilizar a desestruturação: {({ target }}) => setMateriaA(parseInt(target.value))}
      />
      <input
        type="number"
        placeholder="Nota na matéria B"
        onChange={(evento) => setMateriaB(parseInt(evento.target.value))}
      />
      <input
        type="number"
        placeholder="Nota na matéria C"
        onChange={(evento) => setMateriaC(parseInt(evento.target.value))}
      />
      {renderizarResultado()}
    </form> // No onChange também podemos passar uma função utilizando o event.target.value. Nesse caso, a função é a alterarNome
  );
};

export default Formulario;
