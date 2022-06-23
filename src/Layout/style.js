import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;
    font-family: Calibri;
  }
`;

export const LayoutContainer = styled.div`
  height: 100vh;
  font-family: Roboto;
  box-sizing: border-box;
  background: #ffffff;
  padding-left: 30%;
  //@media (max-width: 1480px) {
  //  padding-left: 360px;
  //}
  @media (max-width: 1024px) {
    padding-left: 10%;
  }
`;