import React, { Component } from "react";
import CustomerAuthWithMutation from "./CustomerAuth";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ShopContext } from "../../shop-context";

const HeaderWrapper = styled.div`
  background: #000;
  color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  justify-items: center;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0 1rem;
`;

const HeaderColumn = styled.div`
  justify-self: start;
  grid-column: auto;
  border: 1px solid red;
`;

class Header extends Component {
  static propTypes = {
    title: PropTypes.string
  };

  render() {
    return (
      <ShopContext.Consumer>
        {({ isCartOpen, toggleCart }) => {
          return (
            <HeaderWrapper>
              <HeaderColumn>
                <HeaderTitle>{this.props.title}</HeaderTitle>
              </HeaderColumn>

              <HeaderColumn onClick={toggleCart}>
                <p>lorem ipsum</p>
              </HeaderColumn>

              <HeaderColumn>
                {this.props.accountVerificationMessage ? (
                  <p>
                    We have sent you an email, please click the link included to verify your email
                    address
                  </p>
                ) : null}
                <CustomerAuthWithMutation
                  associateCustomerCheckout={this.associateCustomerCheckout}
                  showAccountVerificationMessage={this.showAccountVerificationMessage}
                />
              </HeaderColumn>
            </HeaderWrapper>
          );
        }}
      </ShopContext.Consumer>
    );
  }
}

export default Header;
