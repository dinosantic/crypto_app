import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, NewsIcon, CryptoIcon } from "../icons";
//style
import styled from "styled-components";
import breakpoint from "./breakpoints";

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="/">
            <HomeIcon />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cryptoc">
            <CryptoIcon />
            CryptoC
          </NavLink>
        </li>
        <li>
          <NavLink to="/news">
            <NewsIcon />
            News
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  position: absolute;
  height: 100%;
  z-index: 2;
  left: 0;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-weight: 900;
  @media only screen and (min-width: ${breakpoint.size.laptop}) {
    position: relative;
    grid-column: 1/2;
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
    writing-mode: initial;
    text-orientation: initial;
    && {
      padding-top: 5rem;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    row-gap: 1rem;
    justify-content: center;

    @media only screen and (min-width: ${breakpoint.size.laptop}) {
      && {
        padding-top: 2rem;
        justify-content: initial;
      }
    }

    li {
      list-style-type: none;
      padding-bottom: 1.5rem;
    }
    @media only screen and (min-width: ${breakpoint.size.laptop}) {
      flex-direction: column;
      li {
        padding-bottom: 0.5rem;
      }
    }
    a {
      display: flex;
      align-items: center;
      position: relative;
      font-size: 1.3rem;
      color: gray;
      &:hover {
        color: whitesmoke;
      }
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
        margin-bottom: 0.5rem;
        fill: grey;
        @media only screen and (min-width: ${breakpoint.size.laptop}) {
          margin-right: 0.5rem;
          margin-bottom: 0;
        }
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
