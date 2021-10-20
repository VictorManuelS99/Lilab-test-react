import styled, { keyframes } from "styled-components";
import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
    width: 26rem;
    height: 38rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    position:relative;
    overflow-y: scroll;
    padding: 0.5rem;
`;

export const ModalAutorContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
`;

export const ModalAutorStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 320px;
  position: relative;

  & p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
  }
`;

const spin = keyframes`
    0% {
    transform: rotate(0deg);
    }

    100% {
    transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-left-color: transparent;
  width: 36px;
  height: 36px;
  border-radius: 50%;

  animation: ${spin} 1s linear infinite;
`;

export const CloseBtn = styled.button`
  all: unset;
  position: absolute;
  right: 0;
  top: 0;
  color: white;
  cursor: pointer;
`;
