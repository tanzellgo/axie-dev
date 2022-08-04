import express from "express";
import Mongoose from "mongoose";
import CORS from "cors";

import { graphQlInit } from "./graphql/index";

async function startServer() {
  try {
    console.clear();

    console.log("connecting to database...\n");
    Mongoose.connect(
      "mongodb+srv://axiez:test321@cluster0.dc1xsdg.mongodb.net/axie?retryWrites=true&w=majority",
      {
        autoIndex: true,
        keepAlive: true,
        connectTimeoutMS: 60000,
      },
      () => {
        const state =
          Number(Mongoose.connection.readyState) === 1 ? "connected" : "error";
        console.log(state);
      }
    );

    console.log("starting express instance...\n");
    const app = express();

    console.log("starting graphql instance...\n");
    const graphQL = graphQlInit();
    await graphQL.start();

    app.use(CORS({ origin: true }));

    graphQL.applyMiddleware({ app });

    app.listen({ port: 8000 }, async () => {
      console.log(
        `🔗 GraphQL is available at http://localhost:8000${graphQL.graphqlPath}`
      );
    });
  } catch (err) {
    console.error("ERR WHILE INITIALIZING SERVER: ", err);
  }
}

startServer();
