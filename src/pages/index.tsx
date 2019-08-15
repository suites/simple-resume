import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
    </Layout>
  );
};

export default IndexPage;
