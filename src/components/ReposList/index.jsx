import { useEffect, useState } from "react";

import styles from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getUser() {
      const requisicao = await fetch(
        `https://api.github.com/users/${nomeUsuario}/repos`
      );
      const respostaEmJson = await requisicao.json();
      
      setRepos(respostaEmJson);
    }

    getUser();
  }, []); // Se o fetch for mal sucedido podemos adicionar "nomeUsuario" dentro deste array vazio para informar o useEffect que ele deve executar a função getUser quando houver alguma mudança na prop nomeUsuario

  return (
    <div className="container">
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
    </div>
  );
};

export default ReposList;
