import React, { Component } from "react";
import { Link } from "react-router-dom";
import CustomerAuthWithMutation from "./CustomerAuth";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ShopContext } from "../../shop-context";

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  justify-items: center;
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
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

  @media (max-width: ${props => props.mediaMaxWidth}px) {
    display: none;
  }
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
                <HeaderTitle>
                  <Link to="/">{this.props.title}</Link>
                </HeaderTitle>
              </HeaderColumn>

              <HeaderColumn mediaMaxWidth={800}>
                <p onClick={toggleCart}>lorem ipsum</p>
              </HeaderColumn>

              <HeaderColumn mediaMaxWidth={800}>
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

// {
//   this.props.accountVerificationMessage ? (
//     <p>
//       We have sent you an email, please click the link included to verify your email
//       address
//                   </p>
//   ) : null
// }
