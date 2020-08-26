import React, { ReactElement } from 'react';
import Section from './common/Section';
import styled, { css } from 'styled-components';
import { colors, spacing, boxShadow } from '../consts';
import Fab from './common/Fab';
import { PlusOutline, ArrowUp, ArrowUpOutline } from 'heroicons-react';
import Select from './common/Select';

interface Props {}

interface ArrowProps {
  direction: 'up' | 'down';
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionTitle = styled.span`
  color: ${colors.gray[500]};
`;

const StyledMonthlyOverview = styled(Section)`
  margin: ${spacing.regular} 0;
`;

const IconContainer = styled.div`
  box-shadow: ${boxShadow};
  border-radius: 100px;
  height: 30px;
  width: 30px;
  display: grid;
  place-content: center;
`;

const Arrow = styled(ArrowUpOutline)<ArrowProps>`
  ${(props) =>
    props.direction === 'down' &&
    css`
      transform: rotate(180deg);
    `}
`;

export default function MonthlyOverview({}: Props): ReactElement {
  return (
    <StyledMonthlyOverview>
      <Container>
        <SectionTitle>Monthly overview</SectionTitle>
        <Select options={[{ label: 'Ali', value: 1 }]} />
        <Fab>
          <PlusOutline />
        </Fab>
      </Container>
      <br />
      <Container>
        <IconContainer>
          <Arrow direction='down' />
        </IconContainer>
        <IconContainer>
          <Arrow direction='up' />
        </IconContainer>
      </Container>
    </StyledMonthlyOverview>
  );
}
