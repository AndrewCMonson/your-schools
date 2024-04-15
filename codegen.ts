import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  config: {
    scalars: {
      ObjectId: "ObjectId",
      Void: "void",
    },
  },
  schema: "http://localhost:3005/graphql",
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["./frontend/src/**/*.{ts,tsx}"],
  generates: {
    "frontend/src/__generatedTypes__/": {
      preset: "client",
      plugins: ["typescript-resolvers", "typescript-mongodb"],
      config: {
        mappers: {
          User: "./backend/models#userSchema",
          School: "./backend/models#schoolsSchema",
          Image: "./backend/models#imageSchema",
        },
      },
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
