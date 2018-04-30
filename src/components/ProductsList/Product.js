import React, { Component } from "react";
import styled from "styled-components";

const ProductWrapper = styled.div`
  flex: 0 1 auto;
  margin: 1rem;
`;

const ProductTitle = styled.h1`
  text-align: center;
`;

class Product extends Component {
  render() {
    const { id, images, title } = this.props;

    return (
      <ProductWrapper data-id={id}>
        <ProductTitle>{title}</ProductTitle>
        <img src={images.edges[0].node.transformedSrc} alt={title} />
      </ProductWrapper>
    );
  }
}

export default Product;
