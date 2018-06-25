import React, { Component } from "react";

class Cart extends Component {
  renderCart = () => {
    const { isCartOpen } = this.props;

    if (!isCartOpen) {
      return null;
    }

    return <div className="cart">I am the cart</div>;
  };
  render() {
    return <div>{this.renderCart()}</div>;
  }
}

export default Cart;
