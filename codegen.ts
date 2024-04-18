import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3005/graphql",
  generates: {
    "backend/__generatedTypes__/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers", "typescript-mongodb"],
    },
  },
};

export default config;
