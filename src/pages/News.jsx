import React from "react";
import moment from "moment";
import styled from "styled-components";
import demoCrypto from "../icons/demoCrypto.jpg";
//
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = () => {
  const { data: newsList, isFetching } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: 50,
    freshness: "Month",
  });

  if (isFetching) return "Fetching data...";

  return (
    <StyledNews>
      <h2>News</h2>
      <AllNews>
        {newsList &&
          newsList?.value.map((news, i) => (
            <Card key={i}>
              <img src={news?.image?.thumbnail?.contentUrl || demoCrypto} />
              <div>{news.name.slice(0, 40) + "..."}</div>
              <button>
                <a href={news.url} target="_blank">
                  Read more
                </a>
              </button>
              <CardDetails>
                <span>{news.provider[0]?.name}</span>
                <time>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </time>
              </CardDetails>
            </Card>
          ))}
      </AllNews>
    </StyledNews>
  );
};
const StyledNews = styled.section``;
const AllNews = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 500px;
  overflow-x: scroll;
  overflow-x: hidden;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
`;
const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
  background-color: rgba(var(--main-bcg-color), 0.3);
  border: 1px solid rgba(var(--font-color), 0.1);
  -webkit-box-shadow: var(--box-shadow);
  box-shadow: var(--box-shadow);
  && {
    padding: 1rem;
  }

  button {
    width: 100px;
    padding: 0.5em 1em;
    border: 1px solid rgba(var(--font-color), 0.1);
    outline: none;
    background: transparent;
    a {
      text-decoration: none;
      color: rgb(var(--font-color));
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
export default News;
