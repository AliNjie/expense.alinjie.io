import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { spacing } from '../../consts';

const StyledSection = styled.section`
  padding: ${spacing.regular} 20px;
  background-color: white;
`;

export default function Section({ ...props }): ReactElement {
  return <StyledSection {...props} />;
}
