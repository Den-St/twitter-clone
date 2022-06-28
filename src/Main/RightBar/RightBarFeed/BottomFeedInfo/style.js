import styled from "styled-components";

export const BottomFeedInfoContainer = styled.div`
  margin-top: 20px;
width: 350px;
  height: 120px;
  display: flex;
  flex-direction: column;
  color: #536471;
  font-weight: lighter;
  font-size: 14px;
  &>a{
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
  font-family: Calibri;
  margin-bottom: 100px;
`;