import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../../queries/productsListQuery';
import Product from '../Product';

class ProductsList extends Component {
  renderProducts() {
    return this.props.data.shop.products.edges.map(product => {
      const { id, title, images } = product.node;
      return <Product key={id} id={id} title={title} images={images} />;
    })
  }

  render() {
    const { loading } = this.props.data;

    if (loading) {
      return <div>Loading....</div>;
    }

    return <div>{this.renderProducts()}</div>;
  }
}

export default graphql(query)(ProductsList);
