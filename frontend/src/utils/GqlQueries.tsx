import { gql } from "@apollo/client";

export const FEED_QUERY = gql`
  query {
    feed(orderBy: { createdAt: desc }) {
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


export const CREATE_JOB_MUTATION = gql`
	mutation PostMutation ($position: String!, $level: String?, $location: String!, $company: String!, $skills: String!, $description: String!) {
		post (
			position: $position,
			level: $level,
			location: $location,
			company: $company,
			skills: $skills,
			description: $description
		) {
			id
		}
	}
`;
