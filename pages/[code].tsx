import React, { FC, useEffect } from 'react';
import { PrismaClient, Url } from '@prisma/client';
import styled from 'styled-components';
import Content from '../components/ui/Content';

const prisma = new PrismaClient();

const Message = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

interface RedirectProps {
  url?: Url;
}

const Redirect: FC<RedirectProps> = ({ url }) => {
  useEffect(() => {
    if (url) {
      window.location.replace(url.original);
    }
  }, [url]);

  return (
    <Content>
      {url ? (
        <Message>Redirecting...</Message>
      ) : (
        <Message>404 Not Found</Message>
      )}
    </Content>
  )
};

export const getServerSideProps = async ({ query }) => {
  const { code } = query;
  const url = await prisma.url.findFirst({
    where: {
      shortened: code,
    },
  });
  return { props: { url }};
}

export default Redirect;
