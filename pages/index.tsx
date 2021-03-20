import React, { FC, useState } from 'react';
import styled from 'styled-components';
import UrlForm from '../components/UrlForm';

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`;

const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5em;
`;

const Home: FC = () => {
  const [url, setUrl] = useState<string>('');
  const urlChanged = (newUrl: string) => {
    setUrl(newUrl);
    console.log(url);
  };

  return (
    <Content>
      <Header>URL shortener</Header>
      <UrlForm onSubmit={urlChanged} />
    </Content>
  );
};

export default Home;
