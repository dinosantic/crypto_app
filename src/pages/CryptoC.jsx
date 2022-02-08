import React, { useState, useEffect } from "react";
//animation
import { motion } from "framer-motion";
import { pageTransition } from "../components/pageTransition";
//style
import styled from "styled-components";
import breakpoint from "../components/breakpoints";
//
import { useGetCryptosQuery } from "../services/cryptoAPI";
//table
import Table from "../components/table/Table";
//
import Loader from "../components/Loader";

const CryptoC = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery(100);
  //
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = () => {
    return cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  useEffect(() => {
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <StyledCrypto
      exit="exit"
      variants={pageTransition}
      initial="hidden"
      animate="show">
      <h2>CryptoC</h2>
      {cryptos && (
        <Table
          tableData={cryptos}
          onChangeValue={(e) => setSearchTerm(e.target.value)}
        />
      )}
    </StyledCrypto>
  );
};

const StyledCrypto = styled(motion.div)`
  && {
    padding: 3rem 3rem 0;
  }

  @media only screen and (min-width: ${breakpoint.size.laptop}) {
    && {
      padding: 0;
    }
  }
`;
export default CryptoC;
