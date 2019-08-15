import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query TempQuery {
  allResumesYaml {
    edges {
      node {
        name
      }
    }
  }
}

`);
  return (
    <Layout>
      <SEO title='Home' />
      <h1>{data.allResumesYaml.edges[0].node.name}</h1>
    </Layout>
  );
};

export default IndexPage;
