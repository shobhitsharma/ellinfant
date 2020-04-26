import { createGlobalStyle } from "styled-components";
import resetCSS from "./resetCSS";

const GlobalStyles = createGlobalStyle`
    ${resetCSS}
    
    body {
        font: 400 16px/1.5 -apple-system, BlinkMacSystemFont, "Rubik", sans-serif;
        color: #111;
        background-color: #f6f7f8;
        -webkit-text-size-adjust: 100%;
        -webkit-font-kerning: normal;
        font-kerning: normal;
    }
`;

export default GlobalStyles;
