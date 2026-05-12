# @enms/layer-a

Reusable [Nuxt layer](https://nuxt.com/docs/getting-started/layers) providing components and typed app config. Part of the `enms` monorepo, consumed by [`@enms/demo`](../apps/demo) via Nuxt's `extends` mechanism.

## Features

- **Reusable Components** — `HelloWorld` component that renders app config values
- **Typed App Config** — Declares the `myLayer.name` config key with TypeScript module augmentation, giving consumers full type safety when overriding
- **Isolated Playground** — `.playground/` directory for developing the layer in isolation

## Development

The `.playground/` directory is a miniature Nuxt app that `extends` this layer, letting you develop and test it without a consumer application.

```bash
pnpm dev
# Starts playground at http://localhost:3000
```

All Nuxt commands target the playground:

```bash
pnpm dev          # Development server
pnpm build        # Production build
pnpm generate     # Static generation
pnpm typecheck    # Type checking
pnpm test         # Run tests
```

## Consumption

Apps consume this layer via `extends` in their `nuxt.config.ts`:

```ts
// apps/demo/nuxt.config.ts
export default defineNuxtConfig({
  extends: ['@enms/layer-a'],
})
```

### Overriding App Config

The layer declares typed app config that consumers can override:

```ts
// In the consumer's app.config.ts
export default defineAppConfig({
  myLayer: {
    name: 'Custom name', // Fully typed — no guessing
  },
})
```

## Publishing

This layer can be published to npm like any other package:

```bash
npm publish --access public
```

Users then install and extend it:

```bash
npm install @enms/layer-a
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  extends: ['@enms/layer-a'],
})
```

Check that the `files` field in `package.json` includes all necessary directories before publishing.
