import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers";

import axieType from "./axie/types";
import axieQueries from "./axie/queries";
import axieMutations from "./axie/mutations";

const types = [...axieType].join("");

const queries = [...axieQueries].map((query) => query.schema);

const mutations = [...axieMutations].map((mutation) => mutation.schema);

const query = `
type Query {
  ${queries.join("\n")}
}
`;

const mutation = `
type Mutation {
  ${mutations.join("\n")}
}
`;

const schemaDefinition = `
type Schema {
  query: Query
  mutation: Mutation
}
`;

const completeSchema = makeExecutableSchema({
  typeDefs: [schemaDefinition, query, mutation, types],
  resolvers,
});
export default completeSchema;
