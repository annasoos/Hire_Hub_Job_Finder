import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContextProvider } from "./utils/context/UserContext";
import { JobContextProvider } from "./utils/context/JobContext";
import { OwnListingsContextProvider } from "./utils/context/OwnListingsContext";
import { FavouritesContextProvider } from "./utils/context/FavouritesContext";
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

//We create the httpLink that will connect our ApolloClient instance with the GraphQL API. The GraphQL server will be running on localhost 4000.
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

// Apollo Client stores the results of your GraphQL queries in a local, normalized, in-memory cache. This enables Apollo Client to respond almost immediately to queries for already-cached data, without even sending a network request.
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
		<ApolloProvider client={client}>
		<JobContextProvider>
		<OwnListingsContextProvider>
		<FavouritesContextProvider>
		<UserContextProvider>
    	<App />
		</UserContextProvider>
		</FavouritesContextProvider>
		</OwnListingsContextProvider>
		</JobContextProvider>
		</ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
