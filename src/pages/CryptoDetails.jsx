import React from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { useGetCryptoDetailsQuery } from "../services/cryptoAPI";
//
import styled from "styled-components";
//
import { Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Legend,
  Title,
  PointElement,
  LinearScale,
  CategoryScale,
  LineElement,
} from "chart.js";
Chart.register(
  ArcElement,
  Legend,
  Title,
  PointElement,
  LinearScale,
  CategoryScale,
  LineElement
);

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  //
  const itemDetails = data?.data?.coin;

  if (isFetching) return "Fetching data...";

  const chartData = {
    labels: Object.keys(itemDetails.sparkline),
    datasets: [
      {
        label: "Prices in USD",
        data: itemDetails.sparkline,
        backgroundColor: itemDetails.color || "#ffbb11",
        borderColor: "#ecf0f1",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h2>Crypto Details </h2>
      {data && (
        <>
          <Card>
            <p>
              Name: {itemDetails.name}
              <span>{` (${itemDetails.symbol})`}</span>
            </p>
            <p>Market cap: {millify(itemDetails.marketCap)}</p>
            <p>Number of exchanges: {millify(itemDetails.numberOfExchanges)}</p>
            <p>Number of markets: {millify(itemDetails.numberOfMarkets)}</p>
          </Card>
          <Line data={chartData} />
        </>
      )}
    </>
  );
};

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 1rem;
  && {
    margin: 2rem 0;
  }

  p {
    padding: 1em;
    border: 1px solid rgba(var(--font-color), 0.1);
    -webkit-box-shadow: var(--box-shadow);
    box-shadow: var(--box-shadow);
    transition: border 0.2s ease-in-out, transform 0.2s ease-in-out;
    &:hover {
      transform: scale(0.95);
      border: 1px solid rgba(var(--font-color));
      -webkit-box-shadow: var(--hover-shadow);
      box-shadow: var(--hover-shadow);
    }
  }
`;

export default CryptoDetails;
