import React from "react";
//style
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>Footer</p>
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  grid-column: 1/-1;
  grid-row: 3/4;
  text-align: center;
  align-self: end;
`;

export default Footer;
