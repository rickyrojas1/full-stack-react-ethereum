import { FaMoon, FaSun } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AppContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-areas:
    'navbar'
    'content'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  flex-direction: row;
`;

export const Navbar = styled.div`
  grid-area: navbar;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 40px;
`;

export const Link = styled(NavLink)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 30px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  &:hover {
    /* border: 1px solid red; */
    color: grey;
  }
`;

export const Content = styled.div`
  grid-area: content;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.body};
`;

export const Footer = styled.div`
  grid-area: footer;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.header};
`;

export const SunIcon = styled(FaSun)`
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const MoonIcon = styled(FaMoon)`
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`;
