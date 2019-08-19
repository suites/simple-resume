import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Resume from '../../models';
import { ALink, FaIcon, Row, RowLeft, RowRight, Section, StyledH2, StyledLi, StyledUl } from '../common';

const Contents = styled.div`
`;

const Introduction = styled.div`
  padding: 2rem 0 0rem;
  border-bottom: 0px;
  & > ${Contents} {
    margin: 0 0 1rem 0;
    font-size: 2rem;
    line-height: 1.4;
    font-weight: 500;
  }
`;

const ProfileRow = styled(Row)`
  padding: 2rem 0 0rem;
  border-bottom: 0px;
`;

const Name = styled(StyledH2)`
  margin-top: 0px;
`;

const Address = styled(StyledUl)`
  list-style-type: none;
`;

const AddressItem = styled(StyledLi)`
  ${Address} > & {
    padding: .6rem 0 .2rem 0;
  }
  &::before{
    content:none;
  }
`;

export const Profile = () => {
  const data = useStaticQuery(graphql`
  query {
  allResumesYaml {
    edges {
      node {
        photo
        name
        links {
          type
          name
          symbol
        }
        introduction
      }
    }
  }
}
  `);
  const resume: Resume = data.allResumesYaml.edges[0].node;

  return (
    <Section>
      <ProfileRow>
        <RowLeft>
          <img src={resume.photo} width='250px' />
        </RowLeft>
        <RowRight>
          <Name>
            {resume.name}
          </Name>
          <Address>
            {
              resume.links.map((value, i) => {
                return (
                  <AddressItem key={i}>
                    <FaIcon
                      icon={value.symbol}
                      verticalAlign='-.125rem'
                      marginRight='1rem'
                    />
                    <ALink href={`${value.type === 'email' ? 'mailto:' : ''}${value.name}`}>{value.name}</ALink>
                  </AddressItem>
                );
              })
            }
          </Address>
        </RowRight>
      </ProfileRow>
      <Introduction>
        {
          resume.introduction.map((value, i) => {
            return <Contents key={i}>{value}</Contents>;
          })
        }
      </Introduction>
    </Section>
  );
};
