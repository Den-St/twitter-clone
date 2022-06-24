import styled from 'styled-components';
import {color} from "../../../palette";

export const LeftBarMenuProfileContainer = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 50px;
margin-bottom: 15px;
cursor: pointer;
  &:hover {
    transition: 0.4s;
    background-color: ${color.buttonLightGrayHover};
  }

  box-sizing: border-box;
  padding: 10px;
  font-family: Calibri;
  font-size: 16px;
  
`;



export const LeftBarMenuProfileImgContainer = styled.div`
    width: 40px;
    height: 40px;
    box-sizing: border-box;
`;

export const LeftBarMenuProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-sizing: border-box;
`;

export const LeftBarMenuProfileTextContainer = styled.div`
  width: 126px;
  height: 40px;
  box-sizing: border-box;
  margin-left: 10px;
`;

export const LeftBarMenuProfileName = styled.span`
  box-sizing: border-box;
  display: block;
  width: 125px;
`;

export const LeftBarMenuProfileLogin = styled.span`
  box-sizing: border-box;
  display: block;
  width: 125px;
`;

export const LeftBarMenuProfileThreeDotsContainer = styled.div`
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > svg{
    height: 19px;
    width: 19px;
  }
  box-sizing: border-box;

`;

