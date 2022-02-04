import React from "react";
import { Link } from "react-router-dom";
//style
import styled from "styled-components";
import breakpoint from "./breakpoints";

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">Logo</Link>
    </StyledLogo>
  );
};

const StyledLogo = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  @media only screen and (min-width: ${breakpoint.size.laptop}) {
    position: relative;
  }
  a {
    text-decoration: none;
    color: whitesmoke;
  }
`;
export default Logo;
