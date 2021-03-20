/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, ComponentType } from 'react';
import { Reset } from 'styled-reset';
import styled from 'styled-components';

const PageStyle = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  padding: 20px;
`;

interface MyAppProps {
  Component: ComponentType;
  pageProps: any;
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => (
  <>
    <Reset />
    <PageStyle>
      <Component {...pageProps} />
    </PageStyle>
  </>
);

export default MyApp;
