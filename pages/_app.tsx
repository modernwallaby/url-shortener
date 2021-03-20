/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, ComponentType } from 'react';
import '../styles/globals.css';

interface MyAppProps {
  Component: ComponentType;
  pageProps: any;
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
