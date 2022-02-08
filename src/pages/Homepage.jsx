import React from "react";
import millify from "millify";
//animation
import { motion } from "framer-motion";
import { pageTransition } from "../components/pageTransition";
//
import { useGetCryptosQuery } from "../services/cryptoAPI";
//style
import styled from "styled-components";
import breakpoint from "../components/breakpoints";
//
import Loader from "../components/Loader";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) {
    return <Loader />;
  }

  return (
    <StyledHomepage
      exit="exit"
      variants={pageTransition}
      initial="hidden"
      animate="show">
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
const StyledHomepage = styled(motion.section)`
  display: grid;
  && {
    padding: 3rem 3rem 0;
  }

  @media only screen and (min-width: ${breakpoint.size.laptop}) {
    && {
      padding: 0;
    }
  }
  h1 {
    padding-bottom: 2rem;
    text-align: center;
  }
`;
const StyledCrypto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 1rem;
  && {
    margin: 2rem 0;
  }
  @media only screen and (min-width: ${breakpoint.size.laptop}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
