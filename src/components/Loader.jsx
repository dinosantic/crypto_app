import React from "react";
//
import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderC>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoaderC>
    </LoaderContainer>
  );
};
const spinning1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const spinning2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;
const spinning3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  justify-content: center;
  align-items: center;
`;
const LoaderC = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #ffffff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: ${spinning1} 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: ${spinning2} 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: ${spinning2} 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: ${spinning3} 0.6s infinite;
  }
`;

export default Loader;
