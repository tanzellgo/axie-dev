import { ApolloServer } from "apollo-server-express";

import schema from "./schema";

const graphQlInit = () =>
  new ApolloServer({
    introspection: true,
    schema,
  });

export { graphQlInit };
