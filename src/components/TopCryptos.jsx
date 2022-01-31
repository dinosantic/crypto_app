import React from "react";
import { Link } from "react-router-dom";
//
import { useGetCryptosQuery } from "../services/cryptoAPI";
//style
import styled from "styled-components";

const TopCrypto = () => {
  const { data: cryptosList } = useGetCryptosQuery(10);

  const topCryptos = cryptosList?.data?.coins;

  return (
    <Container>
      <p>Top 10 crypto</p>
      <ul>
        {topCryptos &&
          topCryptos.map((crypto) => (
            <li key={crypto.uuid}>
              <Link className="list-item" to={`/crypto/${crypto.uuid}`}>
                <span>{crypto.name}</span>
              </Link>
              <span>{crypto.symbol}</span>
              <img src={crypto.iconUrl} />
            </li>
          ))}
      </ul>
      <Link to="/cryptoc">Show more</Link>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
  && {
    margin-bottom: 1rem;
  }
  ul {
    list-style-type: none;
    margin-bottom: 1rem;
    li {
      display: grid;
      grid-template-columns: 6fr 3fr 3fr;
      padding: 0.5rem;
      color: var(--font-color);
      background-color: var(--table-row-color);
      a.list-item {
        color: var(--font-color);
        background-color: transparent;
        padding: 0;
        cursor: pointer;
        width: initial;
        border: none;
        font-size: 16px;
      }
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
  a {
    font-size: 14px;
    text-decoration: none;
    color: rgb(var(--font-color));
    background: transparent;
    padding: 0.5em;
    border: 1px solid rgba(var(--font-color), 0.1);
    border-radius: 0px;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    &:hover {
      color: rgb(var(--table-row-color));
      background-color: rgb(var(--font-color));
    }
  }
`;

export default TopCrypto;
