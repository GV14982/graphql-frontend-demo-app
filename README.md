# React and GraphQL Example

This application is a simple React and Vite starter with some added GraphQL goodness. It has [@graphql-codegen/cli](https://the-guild.dev/graphql/codegen) for doing codegen based on GraphQL inputs (Both schemas and operations). The following plugins are being utilized:

- [@graphql-codegen/client-preset](https://the-guild.dev/graphql/codegen/plugins/presets/preset-client)
    - This is the recommended way to generate typesafe client code for React and Vue apps
- [@graphql-codegen/introspection](https://the-guild.dev/graphql/codegen/plugins/other/introspection)
    - This is to give us a JSON file of the entire introspected schema from our remote GraphQL service

# Requirements

- [NodeJS](https://nodejs.org/en)
- [PNPM](https://pnpm.io/)
- An internet connection

# Setup
Once all the requirements are installed/setup:

1. Install Dependencies
    - `pnpm install --frozen-lockfile`
2. Run GraphQL Codegen CLI
    - `pnpm run codegen`
3. Start the Vite dev server
    - `pnpm run dev`
