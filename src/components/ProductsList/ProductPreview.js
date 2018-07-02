import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductWrapper = styled.div`
  flex: 0 1 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  height: 300px;
`;

const ProductImageWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const ProductInfo = styled.div``;

const ProductTitle = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
`;

class Product extends Component {
  render() {
    const { id, images, title, handle } = this.props;

    return (
      <ProductWrapper data-id={id}>
        <Link to={{ pathname: `/product/${handle}`, state: { id: `${id}` } }}>
          <ProductImageWrapper>
            <img src={images.edges[0].node.transformedSrc} alt={title} />
          </ProductImageWrapper>
          <ProductInfo>
            <ProductTitle>{title}</ProductTitle>
          </ProductInfo>
        </Link>
      </ProductWrapper>
    );
  }
}

export default Product;
