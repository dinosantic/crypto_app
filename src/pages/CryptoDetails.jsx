import React from "react";
import { useParams } from "react-router-dom";
import millify from "millify";
import { useGetCryptoDetailsQuery } from "../services/cryptoAPI";
//animation
import { motion } from "framer-motion";
import { pageTransition } from "../components/pageTransition";
//
import styled from "styled-components";
import breakpoint from "../components/breakpoints";
//
import { Line } from "react-chartjs-2";
//
import Loader from "../components/Loader";

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

  if (isFetching) {
    return <Loader />;
  }

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
    <StyledDetails
      exit="exit"
      variants={pageTransition}
      initial="hidden"
      animate="show">
      <h2>Crypto Details </h2>
      {data && (
        <DataWrapper>
          <Card>
            <p>
              Name: {itemDetails.name}
              <span
                style={{
                  color: itemDetails.color || "#ffbb11",
                }}>{` (${itemDetails.symbol})`}</span>
            </p>
            <p>Market cap: {millify(itemDetails.marketCap)}</p>
            <p>Number of exchanges: {millify(itemDetails.numberOfExchanges)}</p>
            <p>Number of markets: {millify(itemDetails.numberOfMarkets)}</p>
          </Card>
          <Line data={chartData} />
        </DataWrapper>
      )}
    </StyledDetails>
  );
};

const StyledDetails = styled(motion.div)`
  && {
    padding: 3rem 3rem 0;
  }
  @media only screen and (min-width: ${breakpoint.size.laptop}) {
    && {
      padding: 0;
    }
  }
`;
const DataWrapper = styled.div`
  @media only screen and (min-width: ${breakpoint.size.laptop}) {
    position: relative;
    max-width: 100%;
    max-height: 62vh;
    overflow-x: hidden;
  }
  && {
    padding-right: 0.5rem;
  }
  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

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
