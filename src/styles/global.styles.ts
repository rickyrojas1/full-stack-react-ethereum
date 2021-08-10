import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme.styles';
/* eslint-disable @typescript-eslint/no-unsafe-return */

export const GlobalStyle = createGlobalStyle`
   *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }: { theme: Theme }) => theme.body};
    background-color: ${({ theme }: { theme: Theme }) => theme.body};
    color: ${({ theme }: { theme: Theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
`;
