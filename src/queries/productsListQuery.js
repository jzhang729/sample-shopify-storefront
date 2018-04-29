import gql from "graphql-tag";

export default gql`
  {
    shop {
      products(first: 20) {
        edges {
          node {
            id
            title
            description
            handle
            createdAt
            updatedAt
            images(first: 50) {
              edges {
                node {
                  id
                  altText
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
