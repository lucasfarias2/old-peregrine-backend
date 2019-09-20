const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./src/gql/resolvers');

const db = require('./src/db/db');

const server = new ApolloServer({
  typeDefs: importSchema('./src/gql/schema.graphql'),
  resolvers,
});

db.sync().then(() => {
  server.listen().then(({ url }) => {
    // eslint-disable-next-line no-console
    console.log(`Server running at ${url}`);
  });
});
