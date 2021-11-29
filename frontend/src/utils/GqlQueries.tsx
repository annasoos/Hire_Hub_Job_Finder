import { gql } from "@apollo/client";

export const GET_USER = gql`
  query CurrentUser{
    currentUser{
			id
			firstName
			lastName
      email
    }
  }
`;

export const FEED_QUERY = gql`
  query FeedQuery ($orderBy:FeedOrderBy, $skip: Int, $take: Int) {
    feed(orderBy: $orderBy, skip: $skip, take: $take) {
      jobs {
				id
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
			count
    }
  }
`;

export const FEED_SEARCH_QUERY = gql`
  query ($filter: FeedFilters!) {
    feed(orderBy: { createdAt: desc }, filter: $filter) {
      jobs {
				id
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
			count
		}
	}
`;


export const OWN_LISTINGS_QUERY = gql`
  query OwnListingsQuery ($orderBy:FeedOrderBy, $skip: Int, $take: Int){
    ownListings(orderBy: $orderBy, skip: $skip, take: $take) {
      jobs {
				id
        position
        level
        location
        company
        skills
        description
      }
			count
    }
  }
`;


export const FAVOURITES_QUERY = gql`
  query FavListingsQuery($orderBy:FeedOrderBy, $skip: Int, $take: Int){
    favourites(orderBy: $orderBy, skip: $skip, take: $take) {
      jobs {
				id
        position
        level
        location
        company
        skills
        description
      }
			count
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


export const UPDATE_JOB_MUTATION = gql`
	mutation UpdateJobMutation ($jobId:ID!, $level: String!, $skills: String!, $description: String!) {
		updateListing(
			jobId: $jobId,
			level: $level,
			skills: $skills,
			description: $description
		){
			updateJob {
				id
				position
			}
			message
		}
	}
`;


export const DELETE_JOB_MUTATION = gql`
	mutation DeleteJobMutation ($jobId:ID!) {
		deleteListing(jobId: $jobId){
			deleteJob {
				position
			}
			message
		}
	}
`;


export const UPDATE_USER_MUTATION = gql`
	mutation UpdateUserMutation ($userId: ID!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
		updateUser(
			userId: $userId,
			firstName: $firstName,
			lastName: $lastName,
			email: $email,
			password: $password
		){
			token
			message
		}
	}
`;


export const CREATE_LIKE_MUTATION = gql`
	mutation CreateLikeMutation ($jobId: ID!) {
		like(jobId: $jobId){
			job {
				position
  		}
		}
	}
`;


export const DELETE_LIKE_MUTATION = gql`
	mutation DeleteLikeMutation ($userId: ID!, $jobId: ID!) {
		deleteLike(userId: $userId, jobId: $jobId){
			message
		}
	}
`;
