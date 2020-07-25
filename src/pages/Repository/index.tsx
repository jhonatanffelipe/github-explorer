import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import logoImg from "../../assets/github-logo.svg";

import { Header, RepositoryInfo, Issues } from "./styles";

interface RepositoryParams {
  repository: string;
}
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
            alt="Rocketseat"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forkes</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertos</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/">
          <div>
            <strong>repositoryfull_name</strong>
            <p>repositorydescription</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};
export default Repository;
