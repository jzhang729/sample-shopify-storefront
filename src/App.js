import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import baseStyles from "./base-styles";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import query from "./queries/shopQuery";
import { ShopContext } from "./shop-context";

import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Footer from "./components/Footer";

import {
  createCheckout,
  checkoutLineItemsAdd,
  checkoutLineItemsUpdate,
  checkoutLineItemsRemove,
  checkoutCustomerAssociate
} from "./helpers/checkout";

class App extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      shop: PropTypes.object
    }).isRequired,
    createCheckout: PropTypes.func.isRequired,
    checkoutLineItemsAdd: PropTypes.func.isRequired,
    checkoutLineItemsUpdate: PropTypes.func.isRequired
  };

  state = {
    accountVerificationMessage: false,
    isNewCustomer: false,
    products: [],
    checkout: { lineItems: { edges: [] } }
  };

  componentWillMount() {
    this.props
      .createCheckout({
        variables: {
          input: {}
        }
      })
      .then(res => {
        this.setState({
          checkout: res.data.checkoutCreate.checkout
        });
      });
  }

  handleCartOpen = () => {
    this.setState({
      isCartOpen: true
    });
  };

  handleCartClose = () => {
    this.setState({
      isCartOpen: false
    });
  };

  showAccountVerificationMessage = () => {
    this.setState({ accountVerificationMessage: true });
    setTimeout(() => {
      this.setState({
        accountVerificationMessage: false
      });
    }, 5000);
  };

  render() {
    baseStyles();

    if (this.props.data.loading) {
      return <p>Loading ...</p>;
    }

    if (this.props.data.error) {
      return <p>{this.props.data.error.message}</p>;
    }

    return (
      <BrowserRouter>
        <div>
          <Route
            path="/"
            render={props => {
              return (
                <ShopContext.Consumer>
                  {({ isCartOpen, toggleCart }) => {
                    return (
                      <Header
                        accountVerificationMessage={this.state.accountVerificationMessage}
                        isCartOpen={isCartOpen}
                        title={this.props.data.shop.name}
                        toggleCart={toggleCart}
                      />
                    );
                  }}
                </ShopContext.Consumer>
              );
            }}
          />

          <Route
            exact
            path="/"
            render={props => {
              return <ProductsList products={this.props.data.shop.products} />;
            }}
          />

          <Route
            path="/"
            render={props => {
              return <Footer />;
            }}
          />

          <Route
            path="/"
            render={props => {
              return (
                <ShopContext.Consumer>
                  {(isCartOpen, toggleCart) => {
                    return (
                      <Cart
                        removeLineItemInCart={this.removeLineItemInCart}
                        isCartOpen={isCartOpen}
                        updateLineItemInCart={this.updateLineItemInCart}
                        checkout={this.state.checkout}
                        handleCartClose={toggleCart}
                        customerAccessToken={this.state.customerAccessToken}
                      />
                    );
                  }}
                </ShopContext.Consumer>
              );
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}

const AppWithDataAndMutation = compose(
  graphql(query),
  graphql(createCheckout, { name: "createCheckout" }),
  graphql(checkoutLineItemsAdd, { name: "checkoutLineItemsAdd" }),
  graphql(checkoutLineItemsUpdate, { name: "checkoutLineItemsUpdate" }),
  graphql(checkoutLineItemsRemove, { name: "checkoutLineItemsRemove" }),
  graphql(checkoutCustomerAssociate, { name: "checkoutCustomerAssociate" })
)(App);

export default AppWithDataAndMutation;
