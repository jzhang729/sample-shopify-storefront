import React, { Component } from "react";
import ProductPreview from "./ProductPreview";
import styled from "styled-components";
import LoadingStatus from "../LoadingStatus";

const OuterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

class ProductsList extends Component {
  renderProducts() {
    const { products } = this.props;

    return products.edges.map(product => {
      const { id, title, images, handle } = product.node;
      return <ProductPreview handle={handle} id={id} images={images} key={id} title={title} />;
    });
  }

  render() {
    const { loading } = this.props;

    if (loading) {
      return <LoadingStatus />;
    }

    return <OuterWrapper>{this.renderProducts()}</OuterWrapper>;
  }
}

export default ProductsList;
