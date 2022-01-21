import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { Link } from "react-router-dom";
//
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useEffect } from "react";

const TopNews = () => {
  const { data: newsList, isFetching } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: 5,
    freshness: "Day",
  });
  useEffect(() => {
    console.log(newsList);
  }, []);

  return (
    <StyledTopNews>
      <p>Latest news</p>
      {newsList &&
        newsList?.value.map((news, i) => (
          <Card key={i}>
            <div>{news.name.slice(0, 40) + "..."}</div>
            <button>
              <a href={news.url} target="_blank">
                Read more
              </a>
            </button>
            <CardDetails>
              <span>{news.provider[0]?.name}</span>
              <time>{moment(news.datePublished).startOf("ss").fromNow()}</time>
            </CardDetails>
          </Card>
        ))}
      <Link to="/news">Show more</Link>
    </StyledTopNews>
  );
};

const StyledTopNews = styled.section`
  position: relative;
  max-width: 100%;
  max-height: 500px;
  overflow-x: scroll;
  overflow-x: hidden;
  && {
    padding: 0 1rem;
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
  grid-template-columns: 1fr;
  row-gap: 1rem;
  border: 1px solid rgba(var(--font-color), 0.1);
  && {
    padding: 1rem;
    margin: 1rem 0;
  }
  button {
    width: 100px;
    padding: 0.5em 1em;
    border: 1px solid rgba(var(--font-color), 0.1);
    outline: none;
    background: transparent;
    a {
      text-decoration: none;
      padding: 0;
      color: rgb(var(--font-color));
      background: transparent;
    }
  }
`;
const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;

  > * {
    display: inline-block;
    font-size: 12px;
  }
`;
export default TopNews;
