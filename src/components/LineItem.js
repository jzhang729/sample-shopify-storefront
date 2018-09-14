import React, { Component } from "react";
import PropTypes from "prop-types";

class LineItem extends Component {
  static propTypes = {
    id: PropTypes.string,
    quantity: PropTypes.number,
    title: PropTypes.string,
    removeLineItemInCart: PropTypes.func,
    variant: PropTypes.object,
    updateLineItemInCart: PropTypes.func
  };

  render() {
    const { id, quantity, updateLineItemInCart, removeLineItemInCart, title, variant } = this.props;

    const variantTitle = variant.title === "Default Title" ? "" : variant.title;
    return (
      <div key={id}>
        <p>{title}</p>
        <p>{quantity}</p>
        <p>{variantTitle}</p>
        <p>${variant.price}</p>
        <div className="mv2">
          <button className="mr2" onClick={() => updateLineItemInCart(id, quantity + 1)}>
            +
          </button>
          <button onClick={() => updateLineItemInCart(id, quantity - 1)}>-</button>
        </div>

        <button onClick={() => removeLineItemInCart(id)}>Remove</button>
        <hr />
      </div>
    );
  }
}

export default LineItem;
