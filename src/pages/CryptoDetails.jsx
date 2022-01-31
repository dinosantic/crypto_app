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
    <div>
      <h2>Crypto Details </h2>
      {data && (
        <div>
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
          <Line data={chartData} />
        </div>
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
