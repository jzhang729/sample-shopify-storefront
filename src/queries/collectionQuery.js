import gql from 'graphql-tag';

export default gql`
  query getCollection($id: ID!) {
    node(id: $id) {
      id
      ... on Collection {
        title
        products(first: 10) {
          edges {
            node {
              id
              handle
              onlineStoreUrl
              title
              productType
              vendor
              images(first: 10) {
                edges {
                  node {
                    id
                    transformedSrc(maxWidth: 250, preferredContentType: PNG)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
