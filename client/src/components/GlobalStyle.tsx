import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body {
        padding-top: 70px;
    }
    a {
        all: unset;
    }
`;

export default GlobalStyle;
