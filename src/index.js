import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://headphonesdotcom.myshopify.com/api/graphql',
    headers: {
      'X-Shopify-Storefront-Access-Token': '6695bdb7363123197028e489e7b252fb'
    }
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  document.getElementById('root')
);
