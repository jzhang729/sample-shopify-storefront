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
                altText
                transformedSrc(preferredContentType: PNG, maxWidth: 450)
              }
              selectedOptions {
                name
                value
              }
              title
              price
              compareAtPrice
            }
          }
        }
        images(first: 20) {
          edges {
            node {
              altText
              transformedSrc(preferredContentType: PNG, maxWidth: 450)
            }
          }
        }
      }
    }
  }
`;
