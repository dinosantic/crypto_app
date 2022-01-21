import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
//
import { useGetCryptosQuery } from "../services/cryptoAPI";
//style
import styled from "styled-components";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Fetching data...";

  return (
    <StyledHomepage>
      <h2>Crypto</h2>
      <StyledCrypto>
        {Object.entries(globalStats).map(([key, value]) => (
          <SingleItem key={key}>
            <p>
              {key
                .match(/([A-Z]?[^A-Z]*)/g)
                .slice(0, -1)
                .join(" ")
                .replace("24h", " 24h")}
            </p>
            <p>{millify(value)}</p>
          </SingleItem>
        ))}
      </StyledCrypto>
    </StyledHomepage>
  );
};
const StyledHomepage = styled.section`
  display: grid;
  h1 {
    padding-bottom: 2rem;
    text-align: center;
  }
`;
const StyledCrypto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
`;
const SingleItem = styled.div`
  > p::first-letter {
    text-transform: uppercase;
  }
  p {
    font-size: 1rem;
    font-weight: 900;
  }
  p:nth-child(1) {
    font-size: 1.5rem;
  }
  padding: 1rem;
  border-radius: 10px;
  background: var(--main-bcg-color);
`;
export default Homepage;
