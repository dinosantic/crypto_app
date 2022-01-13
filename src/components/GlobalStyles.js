import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --main-gradient: linear-gradient(to right bottom, #414345, #232526);
    --main-bcg-color: 45, 47, 48;
    --main-font: 'Poppins', sans-serif;
    --font-color: 255, 255, 255;
    --table-row-color: 55, 60, 61;
}
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background-color: white;
  }
    }
    body {
        width: 100%;
        color: var(--font-color);
       font-family: var(--main-font);
        h1 {
            font-size: 3rem;
            font-weight: 900;
        }
        h2 {
            font-size: 3rem;
            font-weight: lighter;
        }
        h3 {
            font-size: 1.3rem;
            padding: 1.5rem 0;
        }
        p {
            font-size: 1.2rem;
            line-height: 200%;
        }
        a {
            text-decoration: none;
        }
        img {
            display: block;
        }
        input {
            font-weight: 900;
        }
        button {
            color: var(---font-color);
        }
    }
    
`;
export default GlobalStyles;
