import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./App";

const client = new ApolloClient({
  uri: "https://bund-store.myshopify.com/api/graphql",
  headers: {
    "X-Shopify-Storefront-Access-Token": "49b8e5e10ed55c356a3f1983f08ced91"
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  document.getElementById("root")
);
