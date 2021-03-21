import React, { FC, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import UrlForm from '../components/UrlForm';
import { getShortenedUrl } from '../services/shortener';
import { saveUrl } from '../services/api';
import Content from '../components/ui/Content';

const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ShortenedUrl = styled.textarea`
  font-size: 1.25rem;
  width: 100%;
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
      <Head>
        <title>URL Shortener</title>
      </Head>

      <Header>URL shortener</Header>
      <UrlForm onSubmit={urlChanged} />
      {shortUrl && (
        <>
          <H2>Your shortened url:</H2>
          <ShortenedUrl readOnly={true}>{`${window.location.origin}/${shortUrl}`}</ShortenedUrl>
        </>
      )}
    </Content>
  );
};

export default Home;
