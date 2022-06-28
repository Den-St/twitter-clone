import styled from "styled-components";

export const WhoToReadProfileContainer = styled.div`
  width: 100%;
  height: 72px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover{
    background-color: #f1f0f0;
  }
  padding:12px 16px;
`;

export const WhoToReadProfileWrapper = styled.div`
  width: 316px;
  height: 48px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  
`;

export const WhoToReadAvatarContainer = styled.div`
 width: 48px;
  height: 48px;
  padding-right: 10px;
`;

export const WhoToReadAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius:50% ;
`;

export const WhoToReadUser = styled.div`
    width: 174px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WhoToReadUserName = styled.span`
  width: 174px;
  height: 18px;
  display: flex;
  &>a{
    &:hover{
      text-decoration: underline;
    }
  }
`;

export const WhoToReadUserLogin = styled.span`
  width: 174px;
  height: 18px;
  display: flex;
`;

export const WhoToReadButton = styled.button`
  width: 82px;
  height: 32px;
  background-color: #0f1419;
  color: white;
  border-radius: 20px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.15s;
  &:hover {
    background-color: #363636;
  }
`;