import React from "react";

//import millify from "millify";
import { Link } from "react-router-dom";
//
import { useGetCryptosQuery } from "../services/cryptoAPI";
//style
import styled from "styled-components";

const TopCrypto = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery(10);

  const topCryptos = cryptosList?.data?.coins;

  return (
    <Container>
      <ul>
        {topCryptos &&
          topCryptos.map((crypto) => (
            <li key={crypto.uuid}>
              <span>{crypto.name}</span>
              <span>{crypto.symbol}</span>
              <img src={crypto.iconUrl} />
            </li>
          ))}
      </ul>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  && {
    margin-bottom: 1rem;
  }
  ul {
    list-style-type: none;
    li {
      display: grid;
      grid-template-columns: 6fr 3fr 3fr;
      padding: 0.5rem;
      color: var(--font-color);
      background-color: var(--table-row-color);
      cursor: pointer;
      &:hover {
        background-color: rgba(var(--table-row-color), 0.8);
      }
      img {
        display: inline;
        justify-self: center;
        align-self: center;
        max-width: 18%;
      }
    }
    li:nth-of-type(odd) {
      background-color: rgba(var(--table-row-color), 0.3);
      &:hover {
        background-color: rgba(var(--table-row-color), 0.8);
      }
    }
  }
`;

export default TopCrypto;
