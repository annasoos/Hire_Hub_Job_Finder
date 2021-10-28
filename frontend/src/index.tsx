import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContextProvider } from "./context/UserContext";
import { JobContextProvider } from "./context/JobContext";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

//We create the httpLink that will connect our ApolloClient instance with the GraphQL API. The GraphQL server will be running on localhost 4000.
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

// Apollo Client stores the results of your GraphQL queries in a local, normalized, in-memory cache. This enables Apollo Client to respond almost immediately to queries for already-cached data, without even sending a network request.
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
		<ApolloProvider client={client}>
		<JobContextProvider>
		<UserContextProvider>
    	<App />
		</UserContextProvider>
		</JobContextProvider>
		</ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
