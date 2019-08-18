import React from 'react';
import styled from 'styled-components';
import { Action } from '../../models';
import { Date, HeadLine, Section, StyledH3 } from '../common';

interface Props {
  title: string;
  icon: string;
  actions: Action[];
}

const Contents = styled.div`
  padding: 1rem 0rem 1rem;
  border-bottom: 1px solid #eeeeee;
`;

const Information = styled.span`
`;

export const ActionComponent = ({ title, icon, actions }: Props) => {
  return (
    <Section>
      <HeadLine icon={icon} title={title} />
      {actions && actions.map((action) => {
        return (
          <Contents>
            <StyledH3>{action.name}</StyledH3>
            <Information>{action.information}</Information>
            {
              action.date &&
              <Date start={action.date.start} end={action.date.end} />
            }
            {
              action.description &&
              action.description.map((value) => {
                return (
                  <p>{value}</p>
                );
              })
            }
          </Contents>
        );
      })}
    </Section>
  );
};
