import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { images, title } = this.props;
    
    return (
      <div>
        <h1>{title}</h1>
        <img src={images.edges[0].node.transformedSrc} alt={title} />
      </div>
    );
  }
}

export default Product;
