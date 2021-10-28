import { gql } from "@apollo/client";

export const FEED_QUERY = gql`
  query {
    feed {
      jobs {
        position
        level
        location
        company
        skills
        description
      }
    }
  }
`;
