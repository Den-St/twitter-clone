import styled from "styled-components"
import {color} from "../../../palette";

export const SearchContainer = styled.div`
  width: 350px;
  background-color: white;
  font-family: Calibri;
  position: fixed;
`;

export const SearchWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  //justify-content: space-between;
  border-radius: 20px;
  padding: 12px 12px;
  &>svg{
    margin-right: 15px;
    width: 24px;
    height: 24px;
    fill: #a1acb2;
  }
  background-color: ${({$focus})=> $focus ? `white` : `#eff3f4`};
  border: 1px solid ${({$focus})=> $focus ? `${color.logoBlue}` : `white`};
`;
export const SearchInput = styled.input`
    background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 200;
  color: #536471;
  width: 100%;
  max-width: 255px;
`;

export const SearchPopUp = styled.div`
  width: 374px;
  height: 100px;
  color: #536471;
  font-weight: 200;
  font-size: 18px;
  text-align: center;
  position: absolute;
  top:49px;
  right: -10px;
  border-radius: 10px;
  border: 1px solid #eff0f2;
  padding-top: 20px;
  box-sizing: border-box; 
  background-color: white;
`;

export const CrossButton = styled.button`
  cursor: pointer;
  width: 22px;
  height: 22px;
  border: none;
  outline: none;
  background-color: ${color.logoBlue};
  border-radius: 50%;
  display: flex;
  align-items: center;
  &>svg{
    fill: white;
  }
`;