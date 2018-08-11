import gql from "graphql-tag";

export default gql`
  query {
    shop {
      name
      description
      products(first: 20) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            handle
            title
            options {
              id
              name
              values
            }
            variants(first: 20) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  title
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    src
                  }
                  price
                }
              }
            }
            images(first: 20) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  src
                  transformedSrc(maxWidth: 200, preferredContentType: PNG)
                }
              }
            }
          }
        }
      }
    }
  }
`;
