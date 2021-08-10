import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { ButtonPosition } from './Card';

export const CardContainer = styled.div<{ colors: string }>`
  position: relative;
  margin: 50px;
  padding: 20px;
  min-height: 200px;
  display: grid;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  background: ${props => `radial-gradient(${props.colors})`};

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
`;

export const CardApply = styled.p<{ buttonPosition: ButtonPosition }>`
  grid-row: 4/5;
  align-self: center;
  text-align: ${props => props.buttonPosition};
`;

export const CardLink = styled.a`
  position: relative;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  &:after {
    position: absolute;
    top: 25px;
    left: 0;
    content: '';
    width: 0%;
    height: 3px;
    background-color: ${({ theme }) => theme.text};
    transition: all 0.5s;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const LoadingSpinner = styled(Loader)`
  color: ${({ theme }) => theme.text};
  position: absolute;
  right: 0;
  top: 15px;
`;
