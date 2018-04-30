import styled from "styled-components";
import React, { Component } from "react";

class Header extends Component {
  render() {
    const HeaderWrapper = styled.div`
      width: 100%;
      margin: 0;
      padding: 1rem;
      text-align: center;
    `;

    const HeaderTitle = styled.h1`
      font-size: 2rem;
      font-family: "Montserrat";
      font-weight: normal;
      text-transform: uppercase;
      letter-spacing: 2px;
    `;

    return (
      <HeaderWrapper>
        <HeaderTitle>Jordan's Store</HeaderTitle>
      </HeaderWrapper>
    );
  }
}

export default Header;
