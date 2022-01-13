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
          Top 10 crypto
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
          <Link to="/cryptoc">Show more</Link>
        </Content>
        <Content active={toggleState === 2 ? "active" : ""}>
          <TopNews />
          <Link to="/news">Show more</Link>
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
  background: var(--main-bcg-color);
`;
const BlockTabs = styled.div`
  display: flex;
`;
const TabButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  text-align: center;
  width: 50%;
  transition: width 0.3s ease-in-out;
  cursor: pointer;
  box-sizing: content-box;
  position: relative;
  && {
    padding: 1em;
  }
  ${(props) =>
    props.active === "active" &&
    css`
      width: 90%;
      font-weight: 900;
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
