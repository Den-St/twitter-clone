import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background: #3e3c3cb3;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 0px 16px;
`;

export const ModalWrapper = styled.div`
  width: 600px;
  min-height: 320px;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 20px;
  box-sizing: border-box;
`;
