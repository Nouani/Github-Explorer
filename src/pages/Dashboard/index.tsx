import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="GitHub Explorer" />
            <Title>Explore repositórios no GitHub</Title>

            <Form>
                <input type="text" placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="/">
                    <img
                        src="https://avatars.githubusercontent.com/u/49238044?s=460&u=b4bfbb87c210a3e38c20fbe1b9a4919fad8395a5&v=4"
                        alt="t"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>
                            Easy peasy highly scalable ReactJS & React Native
                            forms!
                        </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="/">
                    <img
                        src="https://avatars.githubusercontent.com/u/49238044?s=460&u=b4bfbb87c210a3e38c20fbe1b9a4919fad8395a5&v=4"
                        alt="t"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>
                            Easy peasy highly scalable ReactJS & React Native
                            forms!
                        </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="/">
                    <img
                        src="https://avatars.githubusercontent.com/u/49238044?s=460&u=b4bfbb87c210a3e38c20fbe1b9a4919fad8395a5&v=4"
                        alt="t"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>
                            Easy peasy highly scalable ReactJS & React Native
                            forms!
                        </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
