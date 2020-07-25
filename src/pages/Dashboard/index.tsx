import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Githib</Title>
    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/54486596?s=460&u=6febbe8652f13c12a71e47cb373016ac07b46357&v=4"
          alt="Jhonatan Felipe"
        />
        <div>
          <strong>jhonatanfflipe/arcnc</strong>
          <p>Projeto desenvolvido ao longo da Semana OmniStack 09</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/54486596?s=460&u=6febbe8652f13c12a71e47cb373016ac07b46357&v=4"
          alt="Jhonatan Felipe"
        />
        <div>
          <strong>jhonatanfflipe/arcnc</strong>
          <p>Projeto desenvolvido ao longo da Semana OmniStack 09</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/54486596?s=460&u=6febbe8652f13c12a71e47cb373016ac07b46357&v=4"
          alt="Jhonatan Felipe"
        />
        <div>
          <strong>jhonatanfflipe/arcnc</strong>
          <p>Projeto desenvolvido ao longo da Semana OmniStack 09</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);
export default Dashboard;
