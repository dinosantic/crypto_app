import React from "react";
import { Routes, Route } from "react-router-dom";
//components
import {
  Nav,
  Tabs,
  Logo,
  Footer,
  Homepage,
  CryptoC,
  CryptoDetails,
  News,
} from "./components";
//style
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";

const App = () => {
  return (
    <StyledApp>
      <GlobalStyles />
      <Logo />
      <Nav />
      <Tabs />
      <Main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cryptoc" element={<CryptoC />} />
          <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Main>
      <Footer />
    </StyledApp>
  );
};

//style
const StyledApp = styled.section`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  //
  display: grid;
  grid-template-columns: 2fr 7fr 3fr;
  grid-template-rows: 1fr 10fr 1fr;
  grid-gap: 1rem;
  padding: 3rem 3rem 0;
  color: white;
  min-height: 100vh;
  background: var(--main-gradient);
  //
  @media (max-width: 1023px) {
    grid-template-columns: 3fr 6fr 3fr;
  }
`;
const Main = styled.section`
  grid-column: 2/3;
  grid-row: 2/3;
  justify-content: center;
`;

export default App;
