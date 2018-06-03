import styled from "styled-components";
import React, { Component } from "react";

class Header extends Component {
  render() {
    const HeaderWrapper = styled.div`
      background: #000;
      color: #fff;
      display: block;
      width: 100%;
      margin: 0;
      padding: 0.5rem;
      text-align: center;
    `;

    const HeaderTitle = styled.h1`
      font-size: 2rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    `;

    return (
      <HeaderWrapper>
        <HeaderTitle>{this.props.name}</HeaderTitle>
      </HeaderWrapper>
    );
  }
}

export default Header;
