import { useEffect, useState } from "react";

import styles from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(false);
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(false);

  useEffect(() => {
    try {
      async function getUser() {
        setEstaCarregando(true);
        const requisicao = await fetch(
          `https://api.github.com/users/${nomeUsuario}/repos`
        );
        const respostaEmJson = await requisicao.json();

        if (respostaEmJson.message) {
          setUsuarioEncontrado(false);
          setEstaCarregando(false);
        } else {
          setUsuarioEncontrado(true);
          setEstaCarregando(false);
          setRepos(respostaEmJson);
        }
      }
      getUser();
    } catch (error) {
      console.log(error);
    }
  }, [nomeUsuario]); // Podemos adicionar a prop "nomeUsuario" dentro deste array vazio para informar o useEffect que ele deve executar a função de fetch getUser toda vez que houver alguma mudança na prop nomeUsuario

  return (
    <div className="container">
      {estaCarregando ? (
        <h1 className={styles.loading}>Carregando repositórios...</h1>
      ) : usuarioEncontrado === false ? (
        <h1 className={styles.notFound}>O usuário buscado não existe.</h1>
      ) : (
        <ul className={styles.list}>
          {repos.map(
            (
              { id, name, language, html_url } // O parâmetro da função anônima retorna um objeto, e podemos utilizar a desestruturação para ter acesso apenas aos itens desejados, eliminando a necessidade de repetir "objeto.propriedade" várias vezes
            ) => (
              <li key={id} className={styles.listItem}>
                <div className={styles.itemName}>
                  <span>Nome:</span>
                  {name}
                </div>
                <div className={styles.itemLanguage}>
                  <span>Linguagem:</span>
                  {language}
                </div>
                <a href={html_url} target="_blank" className={styles.itemLink}>
                  Visitar no GitHub
                </a>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default ReposList;
