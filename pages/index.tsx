import React, { FC, useState } from 'react';
import styled from 'styled-components';
import UrlForm from '../components/UrlForm';
import { getShortenedUrl } from '../services/shortener';
import { saveUrl } from '../services/api';
import Content from '../components/ui/Content';

const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Home: FC = () => {
  const [url, setUrl] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');

  const urlChanged = (newUrl: string) => {
    setUrl(newUrl);
    const shortened = getShortenedUrl(newUrl);
    setShortUrl(shortened);
    saveUrl(newUrl, shortened);
  };

  return (
    <Content>
      <Header>URL shortener</Header>
      <UrlForm onSubmit={urlChanged} />
      {shortUrl && (
        <>
          <h2>Your shortened url:</h2>
          <p>{`${window.location.origin}/${shortUrl}`}</p>
        </>
      )}
    </Content>
  );
};

export default Home;
