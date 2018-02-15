import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { product } = this.props;

    return (
      <div>
        <h1>{product.title}</h1>
        <img src={product.images.edges[0].node.src} alt={product.title} />
      </div>
    );
  }
}

export default Product;
