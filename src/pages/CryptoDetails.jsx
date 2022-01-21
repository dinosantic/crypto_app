import React from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { useGetCryptoDetailsQuery } from "../services/cryptoAPI";
//
import styled from "styled-components";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  //
  const itemDetails = data?.data?.coin;
  console.log(itemDetails);

  return (
    <div>
      <h2>Crypto Details </h2>
      {data && (
        <Card>
          <p>
            Name: {itemDetails.name}
            <span>{` (${itemDetails.symbol})`}</span>
          </p>
          <p>Market cap: {millify(itemDetails.marketCap)}</p>
          <p>Price: {millify(itemDetails.price)}</p>
          <p>Number of exchanges: {millify(itemDetails.numberOfExchanges)}</p>
          <p>Number of markets: {millify(itemDetails.numberOfMarkets)}</p>
        </Card>
      )}
    </div>
  );
};
const StyledDetails = styled.div``;
const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
`;

export default CryptoDetails;
