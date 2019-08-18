import React from 'react';

import styled from 'styled-components';
import './layout.css';
import Profile from './sections/profile';

const Container = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: auto;
`;

const Layout = ({ children }: { children: any }) => {
  return (
    <Container>
      <Profile />
    </Container>
  );
};

export default Layout;
