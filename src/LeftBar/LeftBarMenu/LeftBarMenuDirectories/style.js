import styled from 'styled-components';
import {color} from "../../../palette";

export const LeftBarMenuDirectoriesContainer = styled.div`
  height: 612px;
  box-sizing: border-box;
background: white;
`;

export const LeftBarMenuDirectoryLogoContainer = styled.div`
  height: 56px;
  margin-left: 20px;

`;

export const LeftBarMenuDirectoryLogoButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  &:hover {
    background-color: #e9e9fa;
  }
`;
export const LeftBarMenuDirectoryLogoSvg = styled.svg`
  width: 28px;
  height: 23px;
  fill: ${color.logoBlue};
`;

export const LeftBarTwitButton = styled.button`
  width: 225px;
  height: 52px;
  background-color: ${color.logoBlue};
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  color: white;
  margin: 23px 16px;
  font-family: Calibri;
  font-size: 20px;
  font-weight: 700;
  box-shadow: 0px 10px 0px #eeebeb;
transition: 0.3s;
  &:hover {
    background-color: #1b8bd7;
  }
`;

export const LeftBarMenuDirectoriesWrapper = styled.div`
    margin-left: 20px;
`;
