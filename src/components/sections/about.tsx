import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Linkify from 'react-linkify';
import Resume from '../../models';
import { Contents, HeadLine, Section, StyledH4, StyledH5 } from '../common';
export const About = () => {
  const data = useStaticQuery(graphql`
  query {
  allResumesYaml {
    edges {
      node {
        aboutme
      }
    }
  }
}
  `);
  const resume: Resume = data.allResumesYaml.edges[0].node;

  return (
    <Section>
      <HeadLine icon='FaUserCircle' title='About me' />
      <Contents>
        <Linkify>
          {
            resume.aboutme.map((value, i) => {
              const Sentence =
                value.includes('##') && <StyledH5 key={i}>{value.replace('##', '')}</StyledH5>
                || value.includes('#') && <StyledH4 key={i}>{value.replace('#', '')}</StyledH4>
                || <p key={i}>{value}</p>;
              return (
                Sentence
              );
            })
          }
        </Linkify>
      </Contents>
    </Section>
  );
};
