import React, { Component } from "react";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import baseStyles from "./base-styles";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import query from "./queries/shopQuery";
import { ShopContext } from "./shop-context";

import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import LoadingStatus from "./components/LoadingStatus";

import "./assets/stylesheets/App.css";
import "../node_modules/tachyons/css/tachyons.min.css";

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
    isCartOpen: false,
    checkout: { lineItems: { edges: [] } },
    isNewCustomer: false,
    products: []
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
      return <LoadingStatus />;
    }

    if (this.props.data.error) {
      return <p>{this.props.data.error.message}</p>;
    }

    const classCartToggle = `Content__wrapper ${this.state.isCartOpen ? "cart-visible" : ""}`;

    return (
      <ShopContext.Provider
        value={{
          isCartOpen: this.state.isCartOpen,
          toggleCart: () => {
            this.setState({ isCartOpen: !this.state.isCartOpen });
          }
        }}
      >
        <BrowserRouter>
          <div className="App__wrapper">
            <Route
              path="/"
              render={props => {
                return (
                  <Header
                    accountVerificationMessage={this.state.accountVerificationMessage}
                    title={this.props.data.shop.name}
                  />
                );
              }}
            />

            <div className={classCartToggle}>
              {this.state.isCartOpen ? <div className="overlay" /> : null}
              <div className="Content__content">
                <Route
                  exact
                  path="/product/:handle"
                  render={props => {
                    return <Product {...props} />;
                  }}
                />
                <Route
                  exact
                  path="/"
                  render={props => {
                    return <ProductsList products={this.props.data.shop.products} />;
                  }}
                />
              </div>

              <Cart
                removeLineItemInCart={this.removeLineItemInCart}
                updateLineItemInCart={this.updateLineItemInCart}
                checkout={this.state.checkout}
                customerAccessToken={this.state.customerAccessToken}
              />

              <Route
                path="/"
                render={props => {
                  return <Footer />;
                }}
              />
            </div>

            <Route exact path="/loading" component={LoadingStatus} />
            <Route exact path="/:notfound" component={NotFound} />
          </div>
        </BrowserRouter>
      </ShopContext.Provider>
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
