import '../styles/App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import query from '../queries/shopQuery';
import Header from './Header';
import ProductList from './ProductList';
import HeroBanner from './HeroBanner';
import BestSelling from './BestSelling';
import {
  createCheckout,
  checkoutLineItemsAdd,
  checkoutLineItemsUpdate,
  checkoutLineItemsRemove,
  checkoutCustomerAssociate
  // addVariantToCart,
  // updateLineItemInCart,
  // removeLineItemInCart,
  // associateCustomerCheckout
} from '../helpers/checkout';

class App extends Component {
  render() {
    const { loading, data: { shop } } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <Header shop={shop} />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HeroBanner} />
            <Route exact path="/" component={BestSelling} />
            <Route path="/all" component={ProductList} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const AppWithDataAndMutation = compose(
  graphql(query),
  graphql(createCheckout, { name: 'createCheckout' }),
  graphql(checkoutLineItemsAdd, { name: 'checkoutLineItemsAdd' }),
  graphql(checkoutLineItemsUpdate, { name: 'checkoutLineItemsUpdate' }),
  graphql(checkoutLineItemsRemove, { name: 'checkoutLineItemsRemove' }),
  graphql(checkoutCustomerAssociate, { name: 'checkoutCustomerAssociate' })
)(App);

export default AppWithDataAndMutation;
