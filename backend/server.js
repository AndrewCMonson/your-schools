import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './schemas/index.js';
import cors from 'cors';
import path from 'path';

const PORT = process.env.PORT || 3005;
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
	await server.start();
	
	app.use('/graphql',
	express.json(),
	cors(),
	express.urlencoded({ extended: true }),
	expressMiddleware(server));

	if (process.env.NODE_ENV === 'production') {
		app.use(express.static('frontend/build'));
		app.get('*', (req, res) => {
			res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
		});
	};

	connectDB();

	app.listen(PORT, () => {
		console.log(`Server listening on ${PORT}`);
	});
};

startServer();
