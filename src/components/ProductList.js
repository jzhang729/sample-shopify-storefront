import '../styles/ProductList.css';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/productsQuery';
import Product from './Product';

class ProductList extends Component {
  renderProducts() {
    const { products: { edges } } = this.props.data.shop;

    return edges.map(({ node }) => {
      return <Product key={node.id.toString()} product={node} />;
    });
  }
  render() {
    const { loading } = this.props.data;

    if (loading) {
      return <div>Loading....</div>;
    }

    return <div>{this.renderProducts()}</div>;
  }
}

export default graphql(query)(ProductList);
