import React from "react";
import moment from "moment";
//animation
import { motion } from "framer-motion";
import { pageTransition } from "../components/pageTransition";
//
import styled from "styled-components";
import breakpoint from "../components/breakpoints";
import demoCrypto from "../icons/demoCrypto.jpg";
//
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
//
import Loader from "../components/Loader";

const News = () => {
  const { data: newsList, isFetching } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: 50,
    freshness: "Month",
  });

  if (isFetching) {
    return <Loader />;
  }

  return (
    <StyledNews
      exit="exit"
      variants={pageTransition}
      initial="hidden"
      animate="show">
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
const StyledNews = styled(motion.section)`
  && {
    padding: 3rem 3rem 0;
  }
  @media only screen and (min-width: ${breakpoint.size.laptop}) {
    && {
      padding: 0;
    }
  }
`;
const AllNews = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 80vh;
  overflow-x: hidden;
  && {
    margin: 2rem 0;
  }
  @media only screen and (min-width: ${breakpoint.size.laptop}) {
    max-height: 62vh;
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
  transition: border 0.2s ease-in-out, transform 0.2s ease-in-out;
  && {
    padding: 1rem;
  }
  &:hover {
    transform: scale(0.95);
    border: 1px solid rgba(var(--font-color));
    -webkit-box-shadow: var(--hover-shadow);
    box-shadow: var(--hover-shadow);
  }

  button {
    width: 100px;
    padding: 0.5em 1em;
    border: 1px solid rgba(var(--font-color), 0.1);
    outline: none;
    background: transparent;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: rgb(var(--font-color));
      a {
        color: rgb(var(--table-row-color));
      }
    }
    a {
      text-decoration: none;
      color: rgb(var(--font-color));
      transition: color 0.3s ease-in-out;
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
