import styled from 'styled-components';
import {color} from "../../../palette";

export const CenterHeaderContainer = styled.div`
  height: 53px;
  width: 600px;
  box-sizing: border-box ;
  padding: 0px 16px;
  position: fixed;
  top: 0;
  cursor: pointer;
`;

export const CenterHeaderWrapper = styled.div`
  width: 566px;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const MainText = styled.span`
  width: 532px;
  height: 24px;
  font-family: Calibri;
  font-size: 23px;
  font-weight: 700;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const MainButton = styled.button`
  width: 34px;
  height: 34px;
  background-color: transparent;
  border: none;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;

  &:hover {
    transition: 0.13s;
    background-color: ${color.buttonLightGrayHover};
  }

  & > svg {
    width: 20px;
    height: 20px;
  }
`;