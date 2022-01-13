import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
//
import { useGetCryptosQuery } from "../services/cryptoAPI";

const CryptoC = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  if (isFetching) return "Fetching data...";

  return (
    <div>
      <h2>CryptoC</h2>
      {cryptos &&
        cryptos.map((crypto) => <li key={crypto.uuid}>{crypto.symbol}</li>)}
    </div>
  );
};

export default CryptoC;
