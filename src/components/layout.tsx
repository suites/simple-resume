import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Resume from '../models';
import { ProgressBar } from './common';
import './layout.css';
import { ActionComponent, Careers, Profile, Skills } from './sections';

const Header = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: #f1f1f1;
`;

const Container = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: auto;
`;

const Layout = () => {
  const data = useStaticQuery(graphql`
  query {
  allResumesYaml {
    edges {
      node {
        experiences {
          name
          information
          date {
            start
            end
          }
          description
        }
        educations {
          name
          date {
            start
            end
          }
          description
        }
        licenses {
          name
          information
          date {
            start
            end
          }
          description
        }
      }
    }
  }
}
  `);
  const resume: Resume = data.allResumesYaml.edges[0].node;

  return (
    <>
      <Header>
        <ProgressBar />
      </Header>
      <Container>
        <Profile />
        <Skills />
        <Careers />
        <ActionComponent icon='FaCodeBranch' title='Other Experiences' actions={resume.experiences} />
        <ActionComponent icon='FaUniversity' title='Education' actions={resume.educations} />
        <ActionComponent icon='FaIdCard' title='License' actions={resume.licenses} />
      </Container>
    </>
  );
};

export default Layout;
