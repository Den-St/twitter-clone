import styled from "styled-components";

export const PostContainer = styled.div`
  width: 598px;
  height: 118px;
  box-sizing: border-box;
  padding: 12px 16px;
  box-sizing: border-box;
  border: 1px solid red;
  font-family: Calibri;
`;

export const PostWrapper = styled.div`
  height: 100%;
  width: 566px;
  box-sizing: border-box;
  border: 1px solid red;
  display: flex;
`;

export const PostAvatarContainer = styled.div`
  width: 48px;
  height: 106px;
  margin-right: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid red;
box-sizing: border-box;
`;

export const AvatarButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  background-color: transparent;
  outline: none;
  box-sizing: border-box;
  border: 1px solid red;

`;

export const PostAvatarImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 1px solid red;
`;

export const PostTopContainer = styled.div`
    width: 506px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  box-sizing: border-box;
  border: 1px solid red;
`;

export const PostTopInfoContainer = styled.div`
  height: 20px;
  box-sizing: border-box;
  border: 1px solid red;
`;
export const PostAuthorName = styled.span`
  font-size: 15px;
  font-weight: bold;
  box-sizing: border-box;
  border: 1px solid red;
`;

export const PostAuthorLogin = styled.span`
  font-size: 15px;
  font-weight: 200;
  box-sizing: border-box;
  border: 1px solid red;
`;

export const PostDate = styled.span`
  font-size: 15px;
  font-weight: 200;
  box-sizing: border-box;
  border: 1px solid red;
`;

export const PostThreeDotsButtonContainer = styled.div`
    width: 34px;
  box-sizing: border-box;
  border: 1px solid red;
`;

export const ThreeDotsButton  = styled.button`
    width: 19px;
  height: 19px;
  background: transparent;
  box-sizing: border-box;
  border: none;
  outline: none;
  box-sizing: border-box;
  border: 1px solid red;
`;

export const PostTextContainer = styled.div`
  width: calc(100% - 15px);
  min-height: 20px;
  box-sizing: border-box;
  border: 1px solid red;
`;

export const PostButtonsContainer = styled.div`
  width: 566px;
  width: 20px;
  margin-top:12px;
  box-sizing: border-box;
  border: 1px solid red;
`;

export const PostButton = styled.button`
  height: 19px;
  box-sizing: border-box;
  border: 1px solid red;
`;

export const ButtonDigit = styled.span`
  padding: 0px 12px;
  font-size: 16px;
  font-weight: 200;
  box-sizing: border-box;
  border: 1px solid red;
`;