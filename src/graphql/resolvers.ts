import mergeGraphqlResolvers from "../utils/mergeGraphqlResolvers";

import axieQueries from "./axie/queries";
import axieMutations from "./axie/mutations";

const queries = [...axieQueries].map((query) => query.resolver);

const mutations = [...axieMutations].map((mutation) => mutation.resolver);

export default mergeGraphqlResolvers(queries, mutations);
