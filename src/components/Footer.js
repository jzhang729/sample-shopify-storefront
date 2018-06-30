import React, { Component } from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: var(--bg-color);
  color: var(--bg-color-contrast);
  text-align: center;
  padding: 0.5rem;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 0.85rem;
`;

class Footer extends Component {
  render() {
    return <FooterWrapper>©️ 2018 Bund</FooterWrapper>;
  }
}

export default Footer;
