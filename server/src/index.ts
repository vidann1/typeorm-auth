import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from 'apollo-server-express'
// import { ApolloServer, gql } from 'apollo-server-express'
// import { typeDefs, resolvers } from './schema'
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import * as express from 'express'
import * as session from 'express-session'

const startServer = async () => {
	const server = new ApolloServer({
		// These will be defined for both new or existing servers
		typeDefs,
		resolvers,
		context: ({ req }: any) => ({ req })
	});

	await createConnection();

	const app = express();

	app.use(session({
		secret: 'qweqweqweqweqw1111',
		resave: false,
		saveUninitialized: false
	}));

	server.applyMiddleware({
		app, cors: {
			credentials: true,
			origin: 'http://localhost:3000'
		}
	}); // app is from an existing express app

	app.listen({ port: 4000 }, () =>
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
	)
}

startServer();
