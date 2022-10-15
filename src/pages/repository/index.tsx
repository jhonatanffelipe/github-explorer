import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

import { Header, Issues, RepositoryInfo } from "./styles";

interface IRepository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    avatar_url: string;
    login: string;
  };
}

interface IIssues {
  title: string;
  id: number;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { pathname } = useLocation();
  const [, repositoryFullName] = pathname.split("/repositories/");

  const [repository, setRepository] = useState<IRepository | null>(null);
  const [issues, setIssues] = useState<IIssues[]>([]);

  useEffect(() => {
    api
      .get(`repos/${repositoryFullName}`)
      .then(response => {
        setRepository(response.data);
      })
      .catch();

    api
      .get(`repos/${repositoryFullName}/issues`)
      .then(response => {
        setIssues(response.data);
      })
      .catch();
  }, [repositoryFullName]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="GithubExplorer" />

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt="ProfileImage" />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <span>forks</span>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a href={issue.html_url} key={issue.id}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
