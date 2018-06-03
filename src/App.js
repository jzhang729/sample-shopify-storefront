import React, { Component } from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import { graphql, compose } from "react-apollo";
import query from "./queries/shopQuery";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import baseStyles from "./base-styles";
import styled from "styled-components";

// import {
//   createCheckout,
//   checkoutLineItemsAdd,
//   checkoutLineItemsUpdate,
//   checkoutLineItemsRemove,
//   checkoutCustomerAssociate
// addVariantToCart,
// updateLineItemInCart,
// removeLineItemInCart,
// associateCustomerCheckout
// } from "./helpers/checkout";

const AppWrapper = styled.div``;

class App extends Component {
  render() {
    baseStyles();

    const {
      loading,
      data: { shop }
    } = this.props;

    if (loading || !shop) {
      return <div>Loading...</div>;
    }

    const { name, description, products } = shop;

    return (
      <AppWrapper>
        <Header name={name} description={description} />
        <ProductsList loading={loading} products={products} />
      </AppWrapper>
    );
  }
}

const AppWithDataAndMutation = compose(
  graphql(query)
  // graphql(createCheckout, { name: "createCheckout" }),
  // graphql(checkoutLineItemsAdd, { name: "checkoutLineItemsAdd" }),
  // graphql(checkoutLineItemsUpdate, { name: "checkoutLineItemsUpdate" }),
  // graphql(checkoutLineItemsRemove, { name: "checkoutLineItemsRemove" }),
  // graphql(checkoutCustomerAssociate, { name: "checkoutCustomerAssociate" })
)(App);

export default AppWithDataAndMutation;
