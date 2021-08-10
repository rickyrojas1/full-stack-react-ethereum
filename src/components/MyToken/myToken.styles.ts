import NumberFormat from 'react-number-format';
import styled from 'styled-components';

export const BoldHeader = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-right: 5px;
`;
export const BoldSubHeader = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-right: 5px;
`;

export const BoldValue = styled.p`
  font-weight: bold;
`;

export const FormattedNumber = styled(NumberFormat)<{ fontSize: string }>`
  font-size: ${props => props.fontSize};
  font-weight: bold;
  margin-right: 5px;
`;

export const SendInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: #fdfbf3;
  padding-left: 10px;

  &:focus {
    outline: none;
  }
`;
