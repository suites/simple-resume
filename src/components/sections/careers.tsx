import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Resume, { Career, Project } from '../../models';
import { Date, FaIcon, HeadLine, Row, RowLeft, RowRight, Section, StyledH3, StyledH4, StyledH5, StyledLi, StyledP, StyledUl } from '../common';

const TechStack = ({ career }: { career: Career }) => {
  return (
    <>
      <StyledH5>{'Tech Stacks'}</StyledH5>
      <StyledUl>
        <StyledLi>
          <StyledUl>
            {career.techStacks.map((techStack, i) => {
              return (
                <StyledLi key={i}>
                  {`${techStack.name} : ${techStack.items.join(', ')}`}
                </StyledLi>
              );
            })
            }
          </ StyledUl>
        </StyledLi>
      </StyledUl>
    </>
  );
};

const ProjectComponent = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      {
        projects.map((project, i) => {
          return (
            <div key={i}>
              <StyledH4>
                <FaIcon
                  icon='FaAngleRight'
                  verticalAlign='-.125rem'
                  marginLeft='-.4rem'
                  marginRight='.5rem'
                  size='24'
                />
                {project.name}
              </StyledH4>
              {
                project.date &&
                <Date start={project.date.start} end={project.date.end} />
              }
              <StyledH5>Descrition</StyledH5>
              <StyledP>{project.description}</ StyledP>
              <StyledH5>What did I do</StyledH5>
              <StyledUl>
                {project.parts.map((part, j) => {
                  return (
                    <StyledLi key={j}>
                      {part}
                    </StyledLi>
                  );
                })}
              </StyledUl>
            </div>
          );
        })
      }
    </>
  );
};

export const Careers = () => {
  const data = useStaticQuery(graphql`
  query {
  allResumesYaml {
    edges {
      node {
        careers {
          name
          information
          date {
            start
            end
          }
          techStacks {
            name
            items
          }
          projects {
            name
            date {
              start
              end
            }
            description
            parts
          }
        }
      }
    }
  }
}
  `);
  const resume: Resume = data.allResumesYaml.edges[0].node;

  return (
    <Section>
      <HeadLine icon='FaBriefcase' title='Careers' />
      {
        resume.careers.map((career, i) => {
          return (
            <Row key={i}>
              <RowLeft>
                <StyledH3>{career.name}</StyledH3>
                {career.information}
                {
                  career.date &&
                  <Date start={career.date.start} end={career.date.end} />
                }
              </RowLeft>
              <RowRight>
                <TechStack career={career} />
                <ProjectComponent projects={career.projects} />
              </RowRight>
            </Row>
          );
        })
      }
    </Section>
  );
};
