import styled from "styled-components";
import {StyledTextarea} from "../../../../Input/style";
import {TextArea} from "../../../../Input";
import {color} from "../../../../palette";

export const PostContainer = styled.div`
  width: 598px;
  min-height: 98px;
  box-sizing: border-box;
  padding: 12px 16px;
  box-sizing: border-box;
  
  font-family: Calibri;
`;

export const PostWrapper = styled.div`
  min-height: 100%;
  width: 566px;
  box-sizing: border-box;
  
  display: flex;
`;

export const PostAvatarContainer = styled.div`
  width: 48px;
  min-height: 98px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
box-sizing: border-box;
`;

export const AvatarButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  background-color: transparent;
  outline: none;
  box-sizing: border-box;
  

`;

export const PostAvatarImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-sizing: border-box;
  
`;
export const PostMainContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
export const PostTopContainer = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  box-sizing: border-box;
  
`;

export const PostTopInfoContainer = styled.div`
  height: 20px;
  box-sizing: border-box;
  
  cursor: pointer;
`;
export const PostAuthorName = styled.a`
  font-size: 15px;
  font-weight: bold;
  box-sizing: border-box;
  
  &:hover{
    text-decoration: underline;
  }
`;

export const PostAuthorLogin = styled.a`
  font-size: 15px;
  font-weight: 200;
  box-sizing: border-box;
  
`;

export const PostDate = styled.a`
  font-size: 15px;
  font-weight: 200;
  box-sizing: border-box;
  
  &:hover{
    text-decoration: underline;
  }
`;

export const PostThreeDotsButtonContainer = styled.div`
    width: 34px;
  box-sizing: border-box;
  
  display: flex;
  align-items: center;
  position: relative;
`;

export const ThreeDotsButton  = styled.button`
  width: 24px;
  height: 24px;
  background: transparent;
  box-sizing: border-box;
  border: none;
  outline: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0px;

  &>svg{
    width: 24px;
    height: 24px;
    padding: 0px;
    fill:#536471;
  }
`;

export const PostTextContainer = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-top: 0px;
  width: 500px;
  min-height: 22px;
  box-sizing: border-box;
  word-break: break-all;
`;

export const PostButtonsContainer = styled.div`
  width: 500px;
  margin-top:20px;
  height: 24px;
`;

export const PostButtonWrapper = styled.div`
  width: 425px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PostButton = styled.button`
  min-width: 24px;
  height: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0px 12px 0px 0px;
  &>svg{
    width: 24px;
    height: 24px;
    margin-right: 4px;
    fill: #536471;
  }
`;

export const ButtonDigit = styled.span`
  padding: 0px 12px;
  font-size: 16px;
  font-weight: 200;
  box-sizing: border-box;
`;

export const DotContainer = styled.div`
  max-width: 200px;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: red;
  padding: 10px;
  box-sizing: border-box;
  background: transparent;
  border: none;
  outline: none;
  &>svg{
    fill:red;
  }
  border-radius: 6px;
  &:hover {
    background: #e0dddd;
  }
`;

export const EditButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  background: transparent;
  border: none;
  outline: none;
  border-radius: 6px;
  &:hover {
    background: #e0dddd;
  }
`;

export const EditingInput = styled(TextArea)`
  width: 508px;
  min-height: 124px;
 border: none;
  resize: none;
  box-sizing: border-box;
  overflow: hidden;
  padding: 12px 0px;
  font-size: 22px;
  font-family: Calibri;
  outline: none;
  border:none;
`;



export const EditConfirmButton = styled.button`
  width: 99px;
  height: 34px;
  border-radius: 20px;
  color: white;
  font-family: Calibri;
  font-size: 18px;
  font-weight: bolder;
  background-color: ${color.logoBlue};
  border:none;
  outline: none;
  ${(props)=> {
    if(!props.$active) {
      return `pointer-events:none; opacity:0.4;cursor:auto;`
    }
    return `pointer-events:auto; opacity:1;cursor:pointer;`
  }};
`;

export const CrossContainer = styled.div`
  box-sizing: border-box;
  width: 600px;
  height: 53px;
`;

export const CrossButton = styled.button`
  width: 34px;
  height: 34px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  display: flex; 
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #e3e2e2;
  }

  & > svg {
    width: 15px;
    height: 15px;
  }
`;


export const PrevPostContainer = styled.div`
  max-height: 180px;
  width: 568px;
  min-height: 48px;
  display: flex;
  margin-bottom: 4px;

`;

export const PrevPostAvatarContainer = styled.div`
    width: 48px;
  min-height: 48px;
  padding-right: 10px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

export const PrevPostAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 4px;
`;

export const PrevPostMainContainer = styled.div`
  width: 508px;
  min-height: 54px;
  display: flex;
  flex-direction: column;
  
`;

export const EditingPostContainer = styled.div`
  width: 100%;
  min-height: 176px;
  display: flex;
`;

export const EditingPostMainContainer = styled.div`
  width: 508px;
  min-height: 176px;
  display: flex;
  flex-direction: column;
  
`;

export const Line = styled.div`
  width: 3px;
  min-height: 15px;
  height: 100%;
  margin-bottom: 4px;
  background-color: gray;
  margin-left: 23px;
`;