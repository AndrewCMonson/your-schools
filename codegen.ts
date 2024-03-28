import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3005/graphql",
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["./backend/**/*.{ts,tsx}"],
  generates: {
    "backend/__generatedTypes__/": {
      preset: "client",
      plugins: ["typescript-resolvers"],
      config: {
        avoidOptionals: true,
      },
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
