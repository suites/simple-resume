import React from 'react';
import Linkify from 'react-linkify';
import styled from 'styled-components';
import { Action } from '../../models';
import { Contents, Date, HeadLine, Section, StyledH3 } from '../common';

interface Props {
  title: string;
  icon: string;
  actions: Action[];
}

const Information = styled.span`
`;

const Text = styled.p`
`;

export const ActionComponent = ({ title, icon, actions }: Props) => {
  return (
    <Section>
      <HeadLine icon={icon} title={title} />
      {actions && actions.map((action, i) => {
        return (
          <Contents key={i}>
            <StyledH3>{action.name}</StyledH3>
            <Information>{action.information}</Information>
            {
              action.date &&
              <Date start={action.date.start} end={action.date.end} />
            }
            <Linkify>
              {
                action.description &&
                action.description.map((value, j) => {
                  return (
                    <Text key={j}>{value}</Text>
                  );
                })
              }
            </Linkify>
          </Contents>
        );
      })}
    </Section>
  );
};
