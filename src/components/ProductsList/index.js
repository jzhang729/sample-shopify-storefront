import React, { Component } from "react";
import { graphql } from "react-apollo";
import Product from "./Product";
import styled from "styled-components";
import query from "../../queries/productsListQuery";

const OuterWrapper = styled.div`
  padding: 1rem;
  display: flex;
`;

class ProductsList extends Component {
  renderProducts() {
    return this.props.data.shop.products.edges.map(product => {
      const { id, title, images } = product.node;
      return <Product key={id} id={id} title={title} images={images} />;
    });
  }

  render() {
    const { loading } = this.props.data;

    if (loading) {
      return <OuterWrapper>Loading....</OuterWrapper>;
    }

    return <OuterWrapper>{this.renderProducts()}</OuterWrapper>;
  }
}

export default graphql(query)(ProductsList);
