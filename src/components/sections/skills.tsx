import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Resume from '../../models';
import { HeadLine, Row, RowLeft, RowRight, Section, StyledH3, StyledLi, StyledUl } from '../common';

export const Skills = () => {
  const data = useStaticQuery(graphql`
  query {
  allResumesYaml {
    edges {
      node {
        skills {
          name
          items
        }
      }
    }
  }
}
  `);
  const resume: Resume = data.allResumesYaml.edges[0].node;

  return (
    <Section>
      <HeadLine icon='FaLaptopCode' title='Skills' />
      {
        resume.skills.map((value, i) => {
          return (
            <Row key={i}>
              <RowLeft>
                <StyledH3>{value.name}</StyledH3>
              </RowLeft>
              <RowRight>
                <StyledUl>
                  {
                    value.items.map((item, j) => {
                      return <StyledLi key={j}>{item}</StyledLi>;
                    })
                  }
                </StyledUl>
              </RowRight>
            </Row>
          );
        })
      }

    </Section>
  );
};
