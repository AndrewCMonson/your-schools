import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3005/graphql",
  generates: {
    "backend/__generatedTypes__/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers", "typescript-mongodb"],
      config: {
        contextType: "../utils/auth#MyContext",
        mappers: {
          User: "../models/UserModel#UserAttributes",
          School: "../models/SchoolsModel#SchoolAttributes",
          Session: "../models/SessionModel#SessionAttributes",
          Review: "../models/ReviewModel#ReviewAttributes",
        },
      },
    },
  },
};

export default config;
