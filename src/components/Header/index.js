import React, { Component } from "react";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";
// import CustomerAuthWithMutation from "./CustomerAuth";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ShopContext } from "../../shop-context";
import { Icon } from "@material-ui/core";
import MediaQuery from "react-responsive";
import "./Header.css";

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

// const Bottom = styled.div`

// `;

const HeaderLogo = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-left: 1rem;
`;

const HeaderRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
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
            <HeaderWrapper>
              <Top>
                <HeaderLogo>
                  <Link to="/">{this.props.title}</Link>
                </HeaderLogo>

                <HeaderRight>
                  <MediaQuery minWidth={600}>
                    <div className="Header__desktop">
                      <Link to="/signin">
                        <div className="f6">Sign In</div>
                      </Link>
                    </div>
                  </MediaQuery>
                  <MediaQuery maxWidth={599}>
                    <div className="Header__mobile">
                      <Icon>menu</Icon>
                    </div>
                  </MediaQuery>
                  <div className="f7 pointer" onClick={toggleCart}>
                    <Icon>shopping_cart</Icon>
                  </div>

                  {/* <CustomerAuthWithMutation
                  associateCustomerCheckout={this.associateCustomerCheckout}
                  showAccountVerificationMessage={this.showAccountVerificationMessage}
                /> */}
                </HeaderRight>
              </Top>
              <div className="Header__bottom">
                <Link to="/menu1">Menu Item</Link>
                <Link to="/menu2">Menu Item</Link>
                <Link to="/menu3">Menu Item</Link>
              </div>
            </HeaderWrapper>
          );
        }}
      </ShopContext.Consumer>
    );
  }
}

export default Header;
