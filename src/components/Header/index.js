import React, { Component } from "react";
import { Link } from "react-router-dom";
// import CustomerAuthWithMutation from "./CustomerAuth";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ShopContext } from "../../shop-context";
import { Icon } from "@material-ui/core";

const HeaderWrapper = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
`;

const Top = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 80% 1fr;
  background: var(--header-bg-color);
  color: var(--header-bg-color-contrast);
  align-items: center;
`;

const Bottom = styled.div`
  background: #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > * {
    padding: 0.5rem;
    flex: 1 1 auto;
    text-align: center;

    &:hover {
      background-color: #333;
      color: var(--body-text-color-contrast);
      cursor: pointer;
    }
  }
`;

const HeaderLogo = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-left: 1rem;
`;

const HeaderRight = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  align-items: center;
  padding: 0.5rem;
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
            <div className="Header__wrapper">
              <HeaderWrapper>
                <Top>
                  <HeaderLogo>
                    <Link to="/">{this.props.title}</Link>
                  </HeaderLogo>

                  <HeaderRight mediaMaxWidth={800}>
                    <Link to="/signin">
                      <div className="f6">Sign In</div>
                    </Link>
                    <div className="f7 pointer" onClick={toggleCart}>
                      <Icon>shopping_cart</Icon>
                    </div>
                    {/* <CustomerAuthWithMutation
                  associateCustomerCheckout={this.associateCustomerCheckout}
                  showAccountVerificationMessage={this.showAccountVerificationMessage}
                /> */}
                  </HeaderRight>
                </Top>
                <Bottom>
                  <div>
                    <Link to="/menu1">Menu Item</Link>
                  </div>
                  <div>
                    <Link to="/menu2">Menu Item</Link>
                  </div>
                  <div>
                    <Link to="/menu3">Menu Item</Link>
                  </div>
                  <div>
                    <Link to="/menu4">Menu Item</Link>
                  </div>
                  <div>
                    <Link to="/menu6">Menu Item</Link>
                  </div>
                </Bottom>
              </HeaderWrapper>
            </div>
          );
        }}
      </ShopContext.Consumer>
    );
  }
}

export default Header;
