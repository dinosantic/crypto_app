import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, NewsIcon, ExchangeIcon, CryptoIcon } from "../icons";
//style
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <p>MENU</p>
      <ul>
        <NavLink to="/">
          <HomeIcon />
          Home
        </NavLink>
        <NavLink to="/cryptoc">
          <CryptoIcon />
          CryptoC
        </NavLink>
        <NavLink to="/exchange">
          <ExchangeIcon />
          Exchanges
        </NavLink>
        <NavLink to="/news">
          <NewsIcon />
          News
        </NavLink>
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  font-weight: 900;
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding-top: 2rem;
    a {
      display: flex;
      align-items: end;
      position: relative;
      font-size: 1.3rem;
      color: gray;
      ::after {
        content: "";
        position: absolute;
        background-color: whitesmoke;
        width: 1px;
        height: 0%;
        bottom: 0;
        right: 0;
        transition: height 0.3s ease-in-out;
      }
      svg {
        margin-right: 0.5rem;
        fill: grey;
      }
      &.active {
        color: whitesmoke;
        transition: color 0.7s ease-in-out;
        &::after {
          height: 100%;
        }
        svg {
          fill: whitesmoke;
          transition: fill 0.5s ease-in-out;
        }
      }
    }
  }
`;
export default Nav;
