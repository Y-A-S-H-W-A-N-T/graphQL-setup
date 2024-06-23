import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql', // Replace with your GraphQL server endpoint
  cache: new InMemoryCache(),
});

export { client }
