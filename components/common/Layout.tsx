import { createGlobalStyle } from 'styled-components';
import { ReactNode } from 'react';
import { colors } from '../../consts';

interface Props {
  children: ReactNode;
}

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
    background: ${colors.background};
  }

  ul {
    list-style: none;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 5px 0;
  }
`;

export default function Layout({ children }: Props) {
  return (
    <main>
      {children}
      <GlobalStyle />
    </main>
  );
}
