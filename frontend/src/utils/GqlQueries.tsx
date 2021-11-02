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
	mutation PostMutation ($position: String!, $level: String, $location: String!, $company: String!, $skills: String!, $description: String!) {
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


export const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
		$firstName: String!
		$lastName: String!
    $email: String!
    $password: String!
  ) {
    signup(
			firsName: $firstName
			lastName: $lastName
      email: $email
      password: $password
    ) {
      token
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
    }
  }
`;
