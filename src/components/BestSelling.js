import '../styles/BestSelling.css';
import React, { Component } from 'react';
import query from '../queries/collectionQuery';
import { graphql } from 'react-apollo';

class BestSelling extends Component {
  render() {
    if (this.props.data.loading) {
      return null;
    }

    const { products } = this.props.data.node;

    return (
      <div className="collection__best-selling">
        <h1>Best Selling Products</h1>
        <ul className="collection__best-selling--list">
          {products.edges.map(product => {
            let { id, images, title } = product.node;
            return (
              <li key={id}>
                <img src={images.edges[0].node.transformedSrc} alt={id} />
                {title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default graphql(query, {
  options: props => {
    return {
      variables: { id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzM3NTUyODkwMg==' }
    };
  }
})(BestSelling);
