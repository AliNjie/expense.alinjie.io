import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Section from './Section';
import { CashOutline } from 'heroicons-react';
import { colors, spacing } from '../../consts';
import { thousandSeparate } from '../../utils/thousandSeparate';

interface Props {
  name: string;
  balance: number;
}

const Greeting = styled.h1`
  font-weight: normal;
  color: ${colors.primary};
  font-size: 24px;
`;

const Name = styled.span`
  font-weight: bold;
`;

const BalanceAmount = styled.span`
  font-weight: bold;
  color: ${colors.gray[700]};
`;

const Balance = styled.p`
  display: inline;
  color: ${colors.gray[500]};
`;

const CashIcon = styled(CashOutline)`
  margin-right: ${spacing.small};
`;

const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.gray[700]};
`;

export default function Header({ name, balance }: Props): ReactElement {
  return (
    <Section>
      <header>
        <Greeting>
          Hello, <Name>{name}!</Name>
        </Greeting>
        <BalanceContainer>
          <CashIcon />
          <Balance>
            Balance{' '}
            <BalanceAmount>{thousandSeparate(balance)} NOK</BalanceAmount>
          </Balance>
        </BalanceContainer>
      </header>
    </Section>
  );
}
