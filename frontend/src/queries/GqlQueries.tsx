import { gql } from "@apollo/client";

export const FEED_QUERY = gql`
  query {
    feed (orderBy:{ createdAt:desc }) {
      jobs {
        position
        level
        location
        company
        skills
        description
				creator {
					email
				}
      }
    }
  }
`;
