import { injectGlobal } from "styled-components";
import { normalize } from "styled-normalize";

export default () => injectGlobal`
    ${normalize}

    html, body {
        font-family: arial, sans-serif;
        font-size: 16px;
    }
`;
