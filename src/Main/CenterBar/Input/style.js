import styled from "styled-components";
import {color} from "../../../palette";
import {TextArea} from "../../../Input";

export const InputContainer = styled.div`
  box-sizing: border-box;
  width: 598px;
  padding: 4px 0px;
  min-height: 120px;
  display: flex;
`;

export const InputAvatarContainer = styled.div`
  box-sizing: border-box;
  width: 64px;
  height: 100%;
  margin-right: 12px;
  margin-left: 10px;
  padding-top: 4px;
  display: flex;
  align-items: flex-start;
`;

export const AvatarButton = styled.button`
  box-sizing: border-box;
  width: 52px;
  height: 52px;
  margin-left: 6px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    background-color: ${color.buttonLightGrayHover};
  }
`;

export const AvatarImg = styled.img`
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  &:hover{
    fill: ${color.buttonLightGrayHover};
  }
`;


export const InputRightPart = styled.div`
  box-sizing: border-box;
  width: 533px;
  height: 100%;
  min-height: 120px;
`;

export const InputBarContainer = styled.div`
  box-sizing: border-box;
  width: 506px;
  min-height: 30px;
  display: flex;
  align-items: center;
`;

export const InputBar = styled(TextArea)`
  
  resize: none;
  box-sizing: border-box;
  width: 502px;
  overflow: hidden;
  padding: 12px 0px;
  font-size: 22px;
  font-family: Calibri;
  height: 50px;
  outline: none;
  border:none;
`;

export const ButtonsContainer = styled.div`
  box-sizing: border-box;
  width: 502px;
  height: 48px;
  display: flex;
  justify-content: space-between;
`;

export const MenuButtons = styled.div`
  box-sizing: border-box;
  width: 208px;
  height: 36px;
  margin-top: 12px;
  display: flex;
  align-items: center;
`;

export const MenuButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    transition: 0.15s;
    background-color: rgb(214, 233, 252);
  }
`;

export const InputTweetButtonContainer = styled.div`
  box-sizing: border-box;
  width: 111px;
  height: 36px;
  margin-top: 12px;
  border-radius: 20px;
`;

export const InputTweetButton = styled.button`
  width: 111px;
  height: 36px;
  cursor: pointer;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Calibri;
  font-size: 20px;
  font-weight: 700;
  background-color: transparent;
  border: none;
  outline: none;
  background-color: #1d9bf0;
  border-radius: 20px;
  ${(props)=> {
      if(!props.$active) {
          return `pointer-events:none; opacity:0.4;cursor:auto;`
      }
      return `pointer-events:auto; opacity:1;cursor:pointer;`
  }};
  // opacity: ${(props) => props.$focus  ? `1` : `0`};
  // pointer-events: ${(props) => props.$focus ? `auto` : `none`};
  // opacity: ${(props) => props.$danger  ? `1` : `0`};
  // pointer-events: ${(props) => props.$danger ? `auto` : `none`};
`;

export const OpenButtonContainer = styled.div`
  width: 502px;
  height: 36px;
  display: ${(props) => props.$focus ? `block` : `none`}
`;

export const OpenButton = styled.button`
  width: 117px;
  height: 24px;
  border: none;
  outline: none;
  background: transparent;
  color:${color.logoBlue};
  font-family: Calibri;
  font-size: 16px;
  font-weight: bolder;
  border-radius: 20px;
  border: 1px solid #cfd9de;
`;

export const InfoContainer = styled.div`
  width: 502px;
  height: 25px;
  display: flex;
  align-items: center;
  text-align: center;
  display: ${(props) => props.$focus ? `block` : `none`}

`;

export const InfoText = styled.span`
  color:${color.logoBlue};
  font-family: Calibri;
  font-size: 16px;
  font-weight: bolder;
  display: flex;
  align-items: center;
`;

export const NumberOfLetters = styled.span`
  margin-top: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
  text-align: center;
  
  min-width: 25px;
  height: 25px;
  color: black;
  font-family: Calibri;
  font-size: 15px;
  font-weight: 400;
  border-radius: 50%;
  border: 1px solid;
  display: ${(props) => props.$focus ? `block` : `none`};
  color: ${(props) => props.$danger ? `red` : color.logoBlue};
  color: ${(props) => props.$danger ? `red` : color.logoBlue};
  border-color: ${(props) => props.$danger ? `red` : color.logoBlue};
`;