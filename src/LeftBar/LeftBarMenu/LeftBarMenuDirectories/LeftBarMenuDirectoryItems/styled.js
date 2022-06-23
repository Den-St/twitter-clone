import styled from 'styled-components';

export const LeftBarMenuDirectoryItemContainer = styled.div`
  width: 251px;
  height: 58px;
  background-color: transparent;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: Calibri;
  font-size: 20px;
`;

export const LeftBarMenuDirectoryItemButton = styled.div`
  padding: 12px;
  box-sizing: border-box;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const LeftBarMenuDirectoryItemText = styled.span`
  box-sizing: border-box;
  margin-left: 20px;
  font-family: Calibri;
  ${
  (props) => { if(props?.$isActive) return `color: #333; font-weight: 700;`}
  }
`;
