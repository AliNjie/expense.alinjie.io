import { ApolloServer } from "apollo-server-micro";
import mongoose from "mongoose";
import { resolvers, typeDefs } from "graphql/schema";

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs,
});

const connectiongString = process.env.CONNECTION_STRING;

if (!connectiongString) {
  throw new Error("Environment variable 'CONNECTION_STRING' is undefined.");
}

mongoose.connect(
  connectiongString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (error) => {
    if (error) {
      console.error("Failed to conncet to Mongodb", error);
      throw error;
    }

    console.log("Successfully connected to Mongodb.");
  }
);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
