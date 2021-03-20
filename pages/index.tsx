import React, { FC } from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  font-size: 2rem;
`;

const Home: FC = () => (
  <Header>Welcome</Header>
);

export default Home;
