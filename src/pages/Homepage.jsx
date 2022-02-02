import React from "react";
import millify from "millify";
//
import { useGetCryptosQuery } from "../services/cryptoAPI";
//style
import styled from "styled-components";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Fetching data...";

  console.log(globalStats);

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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 1rem;
  && {
    margin: 2rem 0;
  }
`;
const SingleItem = styled.div`
  background-color: rgba(var(--main-bcg-color), 0.3);
  border: 1px solid rgba(var(--font-color), 0.1);
  -webkit-box-shadow: var(--box-shadow);
  box-shadow: var(--box-shadow);
  transition: border 0.2s ease-in-out, transform 0.2s ease-in-out;
  && {
    padding: 1rem;
  }
  &:hover {
    transform: scale(0.95);
    border: 1px solid rgba(var(--font-color));
    -webkit-box-shadow: var(--hover-shadow);
    box-shadow: var(--hover-shadow);
  }
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
`;
export default Homepage;
