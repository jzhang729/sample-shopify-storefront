import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { HttpLink, InMemoryCache } from "apollo-client-preset";
import { ApolloProvider } from "react-apollo";
import App from "./App";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://jzhang729.myshopify.com/api/graphql",
    headers: {
      "X-Shopify-Storefront-Access-Token": "2807bfd30cfbfa4070554cc20cf6154a"
    }
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  document.getElementById("root")
);
