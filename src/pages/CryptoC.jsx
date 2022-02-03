import React, { useState, useEffect } from "react";
//animation
import { motion } from "framer-motion";
import { pageTransition } from "../components/pageTransition";
//
import { useGetCryptosQuery } from "../services/cryptoAPI";
//table
import Table from "../components/table/Table";

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

  if (isFetching) return "Fetching data...";

  return (
    <motion.div
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
    </motion.div>
  );
};

export default CryptoC;
