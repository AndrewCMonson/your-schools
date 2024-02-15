import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './schemas/index.js';
import cors from 'cors';
// import schools from './data/schools.js';
import schoolRoutes from './routes/schoolRoutes.js';
import userRoutes from './routes/userRoutes.js';

const PORT = process.env.PORT || 3005;
const server = new ApolloServer({ typeDefs, resolvers });
connectDB();

const app = express();


const startServer = async () => {
	await server.start();
	

	
	

	app.use('/graphql',
	express.json(),
	cors(),
	express.urlencoded({ extended: true }),
	expressMiddleware(server));

	connectDB();

	app.listen(PORT, () => {
		console.log(`Server listening on ${PORT}`);
	});
};

startServer();



