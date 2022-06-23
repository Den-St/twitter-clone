import styled from 'styled-components';

export const LeftBarContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 30%;
  
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  left: 0;
  top: 0;
  @media (max-width: 1024px) {
    max-width: 10%;
  }
`;
