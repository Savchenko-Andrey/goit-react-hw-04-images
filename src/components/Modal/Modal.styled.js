import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0%;
  left: 0%;
  overflow-y: auto;
  overflow-x: hidden;
  transition: transform 250ms;
  transition: opacity 250ms, visibility 250ms;
  background: rgba(0, 0, 0, 0.7);
`;

export const ModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 1;
  transform: translate(-50%, -50%);
  padding: 20px;
`;
