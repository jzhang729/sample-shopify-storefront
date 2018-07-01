import React, { Component } from "react";
import { Link } from "react-router-dom";
// import CustomerAuthWithMutation from "./CustomerAuth";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ShopContext } from "../../shop-context";

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  justify-items: center;
  align-items: center;

  @media (max-width: ${props => props.mediaMaxWidth}px) {
    grid-template-columns: 1fr;
  }
`;

const HeaderLogo = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0 1rem;
`;

const HeaderColumn = styled.div`
  justify-self: start;
  grid-column: auto;

  @media (max-width: ${props => props.mediaMaxWidth}px) {
    display: none;
  }
`;

const HeaderRight = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
`;

class Header extends Component {
  static propTypes = {
    accountVerificationMessage: PropTypes.bool,
    title: PropTypes.string
  };

  render() {
    return (
      <ShopContext.Consumer>
        {({ isCartOpen, toggleCart }) => {
          return (
            <HeaderWrapper mediaMaxWidth={800}>
              <HeaderColumn>
                <HeaderLogo>
                  <Link to="/">{this.props.title}</Link>
                </HeaderLogo>
              </HeaderColumn>

              <HeaderColumn mediaMaxWidth={800}>
                <p onClick={toggleCart}>lorem ipsum</p>
              </HeaderColumn>

              <HeaderRight mediaMaxWidth={800}>
                <div className="fr f7">Login | Register</div>
                {/* <CustomerAuthWithMutation
                  associateCustomerCheckout={this.associateCustomerCheckout}
                  showAccountVerificationMessage={this.showAccountVerificationMessage}
                /> */}
              </HeaderRight>
            </HeaderWrapper>
          );
        }}
      </ShopContext.Consumer>
    );
  }
}

export default Header;
