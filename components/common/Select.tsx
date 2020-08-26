import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import Downshift from 'downshift';
import { boxShadow, borderRadius, spacing, colors } from '../../consts';
import { ChevronDownOutline, ChevronUpOutline } from 'heroicons-react';

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  options: Option[];
}

interface ItemProps {
  active: boolean;
}

interface ChevronProps {
  direction: 'up' | 'down';
}

const PADDING = spacing.small;

const Item = styled.li<ItemProps>`
  color: ${(props) => (props.active ? colors.primary : 'none')};
  padding: 0 ${PADDING};
  height: 30px;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Menu = styled.ul`
  background-color: white;
  width: 100%;
  box-shadow: ${boxShadow};
  position: absolute;
  border-radius: ${borderRadius};
  margin-top: ${spacing.small};
`;

const Container = styled.div`
  position: relative;
`;

const Input = styled.input`
  box-shadow: ${boxShadow};
  height: 30px;
  border: none;
  border-radius: ${borderRadius};
  padding: 0 ${PADDING};
`;

const Chevron = styled(ChevronDownOutline)<ChevronProps>`
  position: absolute;
  right: 0;
  height: 15px;
  top: 25%;
  transition: transform 0.2s ease-in-out;
  ${(props) =>
    props.direction === 'down' &&
    css`
      transform: rotate(180deg);
    `}
`;

export default function Select({ options, ...props }: Props): ReactElement {
  return (
    <Downshift itemToString={(item: Option | undefined) => item?.label ?? ''}>
      {({
        getInputProps,
        getMenuProps,
        getItemProps,
        getRootProps,
        highlightedIndex,
        isOpen,
      }) => {
        return (
          <Container {...getRootProps()}>
            <Chevron direction={isOpen ? 'down' : 'up'} />
            <Input {...getInputProps()} />
            {isOpen && (
              <Menu {...getMenuProps()}>
                {options.map((option, index) => (
                  <Item
                    {...getItemProps({ item: option, key: option.label })}
                    active={index === highlightedIndex}
                    key={index}
                  >
                    {option.label}
                  </Item>
                ))}
              </Menu>
            )}
          </Container>
        );
      }}
    </Downshift>
  );
}
