import React from "react";
//style
import styled from "styled-components";
import breakpoint from "./breakpoints";

const Footer = () => {
  return (
    <StyledFooter>
      <p>Footer</p>
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  position: sticky;
  width: 100%;

  position: relative;
  grid-column: 1/-1;
  grid-row: 3/4;
  align-self: end;
  p {
    text-align: center;
  }
  @media only screen and (min-width: ${breakpoint.size.laptop}) {
  }
`;

export default Footer;
