import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3005/graphql",
  generates: {
    "backend/__generatedTypes__/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers", "typescript-mongodb"],
      config: {
        mappers: {
          User: "./models/UserModel#UserAttributes",
          School: "./models/SchoolsModel#SchoolAttributes",
          Session: "./models/SessionModel#SessionAttributes",
        },
      },
    },
  },
};

export default config;
