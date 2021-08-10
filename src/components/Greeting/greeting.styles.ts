import styled from 'styled-components';

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  width: 100vw;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentContainer = styled.div`
  padding-top: 20px;
  font-weight: bold;
`;
export const GreetingInput = styled.input`
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

export const GreetingText = styled.p`
  font-size: 42px;
`;
