import React from "react";
import { useLocation } from "react-router-dom";
//style
import styled, { css } from "styled-components";
import breakpoint from "./breakpoints";

const Footer = () => {
  const location = useLocation();

  return (
    <StyledFooter pathname={location.pathname}>
      <p>Footer</p>
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  position: ${(props) => (props.pathname === "/" ? "relative" : "absolute")};
  bottom: 0;
  width: 100%;
  @media only screen and (min-width: ${breakpoint.size.laptop}) {
    position: relative;
    grid-column: 1/-1;
    grid-row: 3/4;
    align-self: end;
  }

  p {
    text-align: center;
  }
`;

export default Footer;
