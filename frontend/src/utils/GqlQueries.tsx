import { gql } from "@apollo/client";

export const FEED_QUERY = gql`
  query {
    feed(orderBy: { createdAt: asc }) {
      jobs {
        position
        level
        location
        company
        skills
        description
        creator {
					id
          email
        }
      }
    }
  }
`;


export const OWN_LISTINGS_QUERY = gql`
  query {
    ownListings {
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


export const FAVOURITES_QUERY = gql`
  query {
    favourites {
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


export const CREATE_JOB_MUTATION = gql`
	mutation PostMutation ($position: String!, $level: String, $location: String!, $company: String!, $skills: String!, $description: String!) {
		post (
			position: $position,
			level: $level,
			location: $location,
			company: $company,
			skills: $skills,
			description: $description
		) {
			position,
			company
		}
	}
`;


export const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
		$firstName: String!
		$lastName: String!
    $email: String!
    $password: String!
  ) {
    signup(
			firstName: $firstName,
			lastName: $lastName,
      email: $email,
      password: $password
    ) {
      token
			message
    }
  }
`;


export const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $email: String!
    $password: String!
  ) {
    login(email: $email, password: $password) {
      token
			message
    }
  }
`;
