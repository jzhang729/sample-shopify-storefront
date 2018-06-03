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
            title
            options {
              id
              name
              values
            }
            images(first: 10) {
              edges {
                node {
                  src
                  transformedSrc(maxWidth: 200, preferredContentType: WEBP)
                }
              }
            }
          }
        }
      }
    }
  }
`;
