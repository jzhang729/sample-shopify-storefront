import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import query from './queries/shopQuery';
import Header from './components/Header';
import ProductsList from './components/ProductsList';

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
} from './helpers/checkout';

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
            <Route path="/" component={ProductsList} />
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
