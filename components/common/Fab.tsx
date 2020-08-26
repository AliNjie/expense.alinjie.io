import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { colors } from '../../consts';

interface Props {
  children: ReactNode;
}

const FAB_SIZE = '30px';

const StyledFab = styled.button`
  border-radius: 100px;
  border: none;
  height: ${FAB_SIZE};
  width: ${FAB_SIZE};
  display: grid;
  place-content: center;
  background-color: ${colors.primary};
  color: white;
  cursor: pointer;
`;

export default function Fab({ children, ...props }: Props): ReactElement {
  return <StyledFab {...props}>{children}</StyledFab>;
}
