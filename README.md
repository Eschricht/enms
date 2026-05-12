# enms

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Eschricht's Nuxt Monorepo Starter — a scaffold for building [Nuxt](https://nuxt.com) applications composed of reusable layers and shared packages.

## Workspace Structure

```
enms/
├── apps/
│   └── demo/          @enms/demo — Demo Nuxt app consuming the layer
├── packages/
│   └── eslint-config/ @enms/eslint-config — Shared ESLint configuration
└── layers/
    └── layer-a/       @enms/layer-a — Reusable Nuxt layer
```

| Package                                           | Description                                                                      |
| ------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`@enms/eslint-config`](./packages/eslint-config) | Thin wrapper around `@antfu/eslint-config` with `pnpm` and `formatters` defaults |
| [`@enms/layer-a`](./layers/layer-a)               | Reusable Nuxt layer providing components and typed app config                    |
| [`@enms/demo`](./apps/demo)                       | Demo application showcasing Nuxt layer consumption, Nuxt UI, and Tailwind        |

## Prerequisites

- [Node.js](https://nodejs.org) >= 20
- [pnpm](https://pnpm.io) >= 9

## Getting Started

```bash
pnpm install
```

## Scripts

| Command              | Description                    |
| -------------------- | ------------------------------ |
| `pnpm lint`          | Lint all files                 |
| `pnpm lint:fix`      | Lint and auto-fix all files    |
| `pnpm test`          | Run all tests                  |
| `pnpm test:coverage` | Run tests with coverage report |
| `pnpm test:ui`       | Open Vitest UI                 |
| `pnpm typecheck`     | Type-check all packages        |

### Per-Package Commands

```bash
# Develop the demo app
pnpm --filter @enms/demo dev

# Develop the layer in isolation (via playground)
pnpm --filter @enms/layer-a dev

# Run tests for a specific package
pnpm --filter @enms/eslint-config test
```

## Project Conventions

See [AGENTS.md](./AGENTS.md) for architecture details, Nuxt layer patterns, dependency protocols, and code style.
See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.
