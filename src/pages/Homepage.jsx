import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
//
import { useGetCryptosQuery } from "../services/cryptoAPI";
//style
import styled from "styled-components";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();

  return (
    <StyledHomepage>
      <h1>Crypto</h1>
    </StyledHomepage>
  );
};
const StyledHomepage = styled.section`
  display: grid;
`;
export default Homepage;
