import gql from "graphql-tag";

export default gql`
  query($id: ID!) {
    node(id: $id) {
      __typename
      ... on Product {
        onlineStoreUrl
        handle
        title
        options {
          id
          name
          values
        }
        variants(first: 20) {
          edges {
            node {
              id
              image {
                transformedSrc(preferredContentType: PNG, maxWidth: 300)
              }
              title
            }
          }
        }
        images(first: 20) {
          edges {
            node {
              transformedSrc(maxWidth: 500)
            }
          }
        }
      }
    }
  }
`;
