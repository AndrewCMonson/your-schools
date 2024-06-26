import express from "express";
import dotenv from "dotenv";
import process from "process";
import cors from "cors";
import path, { dirname } from "path";
import connectDB from "./config/db.ts";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs, resolvers } from "./schemas/index.ts";
import { authMiddleware } from "./utils/auth.ts";
import { fileURLToPath } from "url";
import { BaseContext } from "@apollo/server";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT || 3005;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

const startServer = async () => {
  const app = express();
  const server = new ApolloServer<BaseContext>({
    typeDefs,
    resolvers,
  });
  await server.start();

  app.use(
    "/graphql",
    express.json(),
    cors(corsOptions),
    cookieParser(),
    express.urlencoded({ extended: true }),
    expressMiddleware(server, {
      context: authMiddleware,
    }),
  );
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*", (_, res) => {
      res.sendFile(
        path.resolve(__dirname, "../frontend", "dist", "index.html"),
      );
    });
  }

  connectDB();

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
};

startServer();
