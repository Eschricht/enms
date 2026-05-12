# @enms/demo

Demo Nuxt application showcasing the patterns and tooling of the `enms` monorepo.

## Features

- **Nuxt Layer Consumption** — Extends [`@enms/layer-a`](../layers/layer-a) via Nuxt's `extends` mechanism in `nuxt.config.ts`
- **Nuxt UI** — Integrated component library with Tailwind CSS
- **Typed App Config** — Overrides the layer's `myLayer.name` app config with full type safety
- **Fully Tested** — Component and page tests using `@nuxt/test-utils` and Vitest

## Scripts

| Command              | Description                                       |
| -------------------- | ------------------------------------------------- |
| `pnpm dev`           | Start development server on http://localhost:3000 |
| `pnpm build`         | Build for production                              |
| `pnpm generate`      | Static generation                                 |
| `pnpm preview`       | Preview production build                          |
| `pnpm test`          | Run tests                                         |
| `pnpm test:coverage` | Run tests with coverage report                    |
| `pnpm typecheck`     | Type-check the app                                |
| `pnpm lint`          | Lint all files                                    |

## Architecture

This app demonstrates the Nuxt layer pattern: shared features (components, app config, styles) live in `@enms/layer-a`, while the demo app provides its own pages and overrides layer defaults.
