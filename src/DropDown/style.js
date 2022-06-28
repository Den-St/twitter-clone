import styled from "styled-components"

//position left-top left-bot right-top right-bot
export const DropDownContainer = styled.div`
  box-shadow: 1px 2px 8px #7e7c7c;
  background-color: #fff;
  border-radius: 20px;
  position: absolute;
  ${({position}) => {
    if (position === 'left-top') return `left:0; top:0; transform:translate(-100%, -100%);`;
    if (position === 'left-bot') return `left:0; top:0; transform:translate(-100%, 0%);`;
    if (position === 'right-top') return `right:0; top:0; transform:translate(100%, -100%);`;
    if (position === 'right-bot') return `right:0; top:0; transform:translate(100%, 0%);`;
  }}
`;

export const DropDownWrapper = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;