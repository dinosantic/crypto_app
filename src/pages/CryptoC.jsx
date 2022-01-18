import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//
import { useGetCryptosQuery } from "../services/cryptoAPI";
//style
import styled from "styled-components";
//table
import Table from "../components/table/Table";

const CryptoC = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
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
    <div>
      <h2>CryptoC</h2>
      <Table
        tableData={cryptos}
        onChangeVale={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default CryptoC;
