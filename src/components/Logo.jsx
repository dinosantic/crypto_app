import React from "react";
import { Link } from "react-router-dom";
//style
import styled from "styled-components";

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">Logo</Link>
    </StyledLogo>
  );
};

const StyledLogo = styled.span`
  //text-3xl font-black
  a {
    text-decoration: none;
    color: whitesmoke;
  }
`;
export default Logo;
