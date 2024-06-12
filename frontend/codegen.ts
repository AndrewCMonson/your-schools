import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3005/graphql",
  documents: "./src/**/**/*.{ts,tsx}",
  generates: {
    "src/__generatedTypes__/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: true,
      },
      plugins: [],
    },
  },
};

export default config;
