import React, { Component } from "react";
import PropTypes from "prop-types";

import { ShopContext } from "../shop-context";

class Cart extends Component {
  static propTypes = {
    checkout: PropTypes.object,
    removeLineItemInCart: PropTypes.func,
    updateLineItemInCart: PropTypes.func
  };
  render() {
    return (
      <ShopContext.Consumer>
        {({ isCartOpen }) => {
          return <div>I am the cart</div>;
        }}
      </ShopContext.Consumer>
    );
  }
}

export default Cart;
