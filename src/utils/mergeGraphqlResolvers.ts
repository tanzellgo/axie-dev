type Query = Record<string, any>
type Mutation = Record<string, any>

function mergeGraphqlResolvers(queries: Query[], mutations: Mutation[]) {
  const resolvers: Record<string, any> = {
    Query: {},
    Mutation: {}
  }

  queries.forEach(query => {
    Object.keys(query).forEach((queryKey) => {
      resolvers.Query[queryKey] = query[queryKey];
    })
  });

  mutations.forEach(mutation => {
    Object.keys(mutation).forEach(mutationKey => {
      resolvers.Mutation[mutationKey] = mutation[mutationKey]
    })
  })

  return resolvers;
}

export default mergeGraphqlResolvers