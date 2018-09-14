import React, { Component } from "react";
import PropTypes from "prop-types";
import LineItem from "./LineItem";

import { ShopContext } from "../shop-context";

class Cart extends Component {
  cart = React.createRef();

  static propTypes = {
    checkout: PropTypes.object,
    removeLineItemInCart: PropTypes.func,
    updateLineItemInCart: PropTypes.func
  };

  openCheckout = () => {
    window.open(this.props.checkout.webUrl);
  };

  renderLineItems = lineItems => {
    const { removeLineItemInCart, updateLineItemInCart } = this.props;

    return lineItems.map(lineItem => {
      const { id, quantity, title, variant } = lineItem.node;
      return (
        <LineItem
          key={id}
          id={id}
          quantity={quantity}
          removeLineItemInCart={removeLineItemInCart}
          title={title}
          updateLineItemInCart={updateLineItemInCart}
          variant={variant}
        />
      );
    });
  };

  render() {
    const { checkout } = this.props;

    return (
      <ShopContext.Consumer>
        {({ toggleCart }) => {
          return (
            <div className="Content__cart" ref={this.cart}>
              <button onClick={toggleCart}>Click Me To Close</button>
              {this.renderLineItems(checkout.lineItems.edges)}
            </div>
          );
        }}
      </ShopContext.Consumer>
    );
  }
}

export default Cart;
