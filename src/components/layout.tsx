import React from 'react';

import styled from 'styled-components';
import './layout.css';
import { Careers, Profile, Skills } from './sections';

const Container = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: auto;
`;

const Layout = ({ children }: { children: any }) => {
  return (
    <Container>
      <Profile />
      <Skills />
      <Careers />
    </Container>
  );
};

export default Layout;
