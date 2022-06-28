import styled from "styled-components";
import {color} from "../palette";

export const ChooseAudienceContainer = styled.div`
  box-sizing: border-box;
  width: 260px;
  height: 128px;
  padding: 12px;
  border: none;
  border-radius: 20px;
  box-shadow: 2px 2px 8px black;
  font-family: Calibri;
  background-color: white;
  position: absolute;
  transition: 0.1s;
`;

export const ChooseAudienceWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;



export const ChooseAudienceHeader = styled.h1`
  font-weight: bolder;
  font-size: 23px;
  background-color: white;
  margin: 0;
`;

export const ChooseAudienceButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  &>svg{
    padding: 10px;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    background-color: ${color.logoBlue};
    fill: white;
    margin-right: 15px;
  }
  cursor: pointer;
  margin: 16px 0px;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 20px;
  background-color: white;
`;


export const ChooseAudienceContainer2 = styled.div`
  width: 320px;
  height: 304px;
  padding: 16px 16px 2px 16px;
  position: absolute;
  background-color: white;
  border-radius: 20px;
  box-shadow: 2px 2px 8px black;
  font-family: Calibri;
  z-index: 1;
  
`;

export const ChooseAudienceWrapper2 = styled.div`
  width: 100%;
  box-sizing: border-box;

  height: 100%;
`;

export const ChooseAudienceHeader2 = styled.h3`
  margin: 0px;
  box-sizing: border-box;

`;

export const ChooseAudienceInfo2 = styled.span`
  font-size: 19px;
  font-weight: 400;
  color: #546470;
  box-sizing: border-box;

`;

export const ChooseAudienceButton2 = styled.button`
  display: flex;
  width: 100%;
  height: 63px;
  font-size: 19px;
  font-weight: 400;
  color: #546470;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  &>span{
    text-align: left;
  }
  &>svg{
    border-radius: 50%;
    padding: 10px;
    background-color: ${color.logoBlue};
    fill: white;
    margin-right: 5px;
  }
`;

export const ChooseAudience2ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const CheckBox = styled.div`
  position: absolute;
  right: 0;
  &>svg{
    fill:${color.logoBlue};
  }
`;

export const TickContainer = styled.div`
  margin-left: 20px;
  &>svg{
    fill: ${color.logoBlue};
  }
`;