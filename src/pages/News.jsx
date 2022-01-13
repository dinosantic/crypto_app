import React from "react";
import { Link } from "react-router-dom";
//
import { useGetCryptosQuery } from "../services/cryptoAPI";

const News = () => {
  const { data: newsList, isFetching } = useGetCryptosQuery();
  if (isFetching) return "Fetching data...";
  return (
    <div>
      <h2>News</h2>
    </div>
  );
};

export default News;
