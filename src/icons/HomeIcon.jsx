import React from "react";
//style
import styled from "styled-components";

const HomeIcon = () => {
  return (
    <HomeSvg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </HomeSvg>
  );
};

export default HomeIcon;

const HomeSvg = styled.svg``;
