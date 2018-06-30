import React, { Component } from "react";

class Cart extends Component {
  render() {
    const { isCartOpen } = this.props;
    const classes = `Content__cart`;

    return (
      <div className={classes}>
        <div className="cart">I am the cart</div>
      </div>
    );
  }
}

export default Cart;
