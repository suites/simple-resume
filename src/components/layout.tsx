import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './layout.css';
import Profile from './sections/profile';

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <Profile />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
