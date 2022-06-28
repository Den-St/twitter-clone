import styled from "styled-components";
import {color} from "../../../../palette";

export const ListContainer = styled.div`
    width: 350px;
    min-height:48px;
    box-sizing: border-box;
    font-family: Calibri;
    display: flex;
    flex-direction: column;
`;

export const ListWrapper = styled.div`
  box-sizing: border-box;

`;

export const ListHeaderContainer = styled.div`
  height: 48px;
  width: 348px;
  box-sizing: border-box;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListHeader = styled.h2`
  box-sizing: border-box;
  font-weight: bolder;
  width: 100%;
  height: 100%;
`;

export const TopicItemContainer = styled.div`
  width: 100%;
  height: 82px;
  box-sizing: border-box;
  padding: 12px 16px;
  background-color: transparent;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #f1f0f0;
  }
`;

export const TopicItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TopicTopInfoContainer = styled.div`
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

export const Theme = styled.div`
  font-size: 15px;
  color: #536471;
  font-weight: 200;
`;

export const ThreeDotsButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #a1c5de;
  }
  &:hover {
    & > svg {
      fill: #1d9bf0;
    }
  }
  & > svg {
    width: 24px;
    height: 24px;
    fill: #536471;
  }
`;

export const TopicMainContainer = styled.div`
  width: 100%;
  height: 20px;
  font-size: 20px;
  font-weight: 500;
  margin-top: 5px;
`;

export const TopicTweetNumberContainer = styled.div`
  margin-top: 4px;
  height: 16px;
  width: 100%;
  font-size: 15px;
  color: #536471;
  font-weight: 200;
`;

export const ShowMoreButton = styled.button`
  width: 100%;
  height: 52px;
  padding: 16px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  color: ${color.logoBlue};
  font-weight: 200;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: left;
  &:hover{
    background-color: #f1f0f0;
  }
`;

export const DeletedNotification = styled.div`
  width: 316px;
  height: 66px;
  border-radius: 10px;
  border: 1px solid #eff0f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;