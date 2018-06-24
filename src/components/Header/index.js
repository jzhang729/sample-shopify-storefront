import React, { Component } from "react";
import CustomerAuthWithMutation from "./CustomerAuth";
import PropTypes from "prop-types";
import styled from "styled-components";

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

class Header extends Component {
  static propTypes = {
    title: PropTypes.string
  };

  render() {
    return (
      <HeaderWrapper>
        <HeaderTitle>{this.props.title}</HeaderTitle>
        <h1 onClick={this.props.toggleCart}>Click Me</h1>

        {this.props.accountVerificationMessage ? (
          <p>
            We have sent you an email, please click the link included to verify your email address
          </p>
        ) : null}

        {!this.props.isCartOpen && (
          <div className="App__view-cart-wrapper">
            <button className="App__view-cart" onClick={() => this.setState({ isCartOpen: true })}>
              Cart
            </button>
          </div>
        )}
        <CustomerAuthWithMutation
          associateCustomerCheckout={this.associateCustomerCheckout}
          showAccountVerificationMessage={this.showAccountVerificationMessage}
        />
      </HeaderWrapper>
    );
  }
}

export default Header;
