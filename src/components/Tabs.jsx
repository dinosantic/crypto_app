import { useState } from "react";
import { Link } from "react-router-dom";
//style
import styled, { css } from "styled-components";
//components
import TopCryptos from "./TopCryptos";
import TopNews from "./TopNews";
///

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <TabsContainer>
      <BlockTabs>
        <TabButton
          active={toggleState === 1 ? "active" : ""}
          onClick={() => toggleTab(1)}>
          Crypto
        </TabButton>
        <TabButton
          active={toggleState === 2 ? "active" : ""}
          onClick={() => toggleTab(2)}>
          News
        </TabButton>
      </BlockTabs>
      <ContentTabs>
        <Content active={toggleState === 1 ? "active" : ""}>
          <TopCryptos />
        </Content>
        <Content active={toggleState === 2 ? "active" : ""}>
          <TopNews />
        </Content>
      </ContentTabs>
    </TabsContainer>
  );
};
const TabsContainer = styled.div`
  grid-column: 3/4;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  position: relative;
  word-break: break-all;
  border-radius: 10px;
  background: transparent;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20%;
    z-index: 0;
    transform: translate(-50%, -50%);
    width: 270px;
    height: 170px;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    filter: blur(70px);
    opacity: 0.1;
  }
`;
const BlockTabs = styled.div`
  display: flex;
`;
const TabButton = styled.button`
  position: relative;
  box-sizing: content-box;
  width: 50%;
  transition: width 0.3s ease-in-out;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  && {
    padding: 1em;
  }
  ${(props) =>
    props.active === "active" &&
    css`
      width: 70%;
      font-weight: 600;
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 10px);
        height: 5px;
        background: rgb(255, 255, 255);
        border-radius: 10px;
      }
    `}
`;
const ContentTabs = styled.div`
  flex-grow: 1;
`;
const Content = styled.div`
  padding-top: 1rem;
  width: 100%;
  height: 100%;
  display: none;
  a {
    text-decoration: none;
    color: rgb(45, 47, 48);
    padding: 0.5em 1em;
    background: white;
    border-radius: 10px;
  }

  ${(props) =>
    props.active === "active" &&
    css`
      display: block;
    `}
`;

export default Tabs;
