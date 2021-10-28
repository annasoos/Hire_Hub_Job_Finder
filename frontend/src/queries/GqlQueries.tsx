import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
{
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