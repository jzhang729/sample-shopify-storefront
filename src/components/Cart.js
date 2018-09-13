import React, { Component } from "react";
import PropTypes from "prop-types";

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
    return lineItems.map(lineItem => {
      const { id, quantity, title, variant } = lineItem.node;

      const variantTitle = variant.title === "Default Title" ? "" : variant.title;
      return (
        <div key={id}>
          <p>{title}</p>
          <p>{quantity}</p>
          <p>{variantTitle}</p>
          <p>${variant.price}</p>
          <button onClick={() => this.props.removeLineItemInCart(id)}>Remove</button>
          <hr />
        </div>
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
