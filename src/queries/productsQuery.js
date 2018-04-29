import gql from 'graphql-tag';

export default gql`
  query {
    node(id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg1MzY1Mzg0ODEwOA==") {
      id
      ... on Product {
        title
        images(first: 5) {
          edges {
            node {
              id
              originalSrc
              transformedSrc(maxWidth: 500, preferredContentType: WEBP)
            }
          }
        }
      }
    }
  }
`;
