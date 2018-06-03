import { injectGlobal } from "styled-components";
import { normalize } from "styled-normalize";

export default () => injectGlobal`
    ${normalize}

    @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates');

    html, body {
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 16px;
        max-width: 100vw;
        overflow-x: hidden;
        overflow-y: scroll;
    }
`;
