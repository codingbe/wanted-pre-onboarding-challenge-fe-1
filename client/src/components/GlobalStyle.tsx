import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    a {
        all: unset;
    }
`;

export default GlobalStyle;
