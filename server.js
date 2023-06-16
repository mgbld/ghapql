import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Type def descrite the API interface
const typeDefs = `
  type Query {
    greeting: String
  }
`;

// IMPLEMENTATION
// Resolves the values of a give function
const resolvers = {
  Query: {
    greeting: () => 'Hello world',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 7777 } });
console.log(`Server running at ${url}`);
