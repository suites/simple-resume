import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Resume, { Career, Project } from '../../models';
import { FaIcon, HeadLine, PeriodTime, Row, RowLeft, RowRight, Section, StyledH3, StyledH4, StyledH5, StyledLi, StyledP, StyledUl } from '../common';

const TechStack = ({ career }: { career: Career }) => {
  return (
    <StyledUl>
      <StyledLi>
        {career.techStacks.map((techStack) => {
          return (
            <StyledLi>
              {`${techStack.name} : ${techStack.items.join(', ')}`}
            </StyledLi>
          );
        })
        }
      </StyledLi>
    </StyledUl>
  );
};

const ProjectComponent = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      {
        projects.map((project) => {
          return (
            <>
              <StyledH4>
                <FaIcon icon='FaAngleRight' />
                {project.name}
              </StyledH4>
              <PeriodTime start={project.period.start} end={project.period.end} />
              <StyledH5>Descrition</StyledH5>
              <StyledP>{project.description}</ StyledP>
              <StyledH5>What did I do</StyledH5>
              <StyledUl>
                {project.parts.map((part) => {
                  return (
                    <StyledLi>
                      {part}
                    </StyledLi>
                  );
                })}
              </StyledUl>
            </>
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
          role
          workPeriod {
            start
            end
          }
          techStacks {
            name
            items
          }
          projects {
            name
            period {
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
        resume.careers.map((career) => {
          return (
            <Row>
              <RowLeft>
                <StyledH3>{career.name}</StyledH3>
                {career.role}
                <PeriodTime start={career.workPeriod.start} end={career.workPeriod.end} />
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
