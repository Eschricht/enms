# @enms/eslint-config

Shared ESLint configuration for the `enms` monorepo. A thin wrapper around [`@antfu/eslint-config`](https://github.com/antfu/eslint-config) that applies opinionated defaults.

## Features

- Extends `@antfu/eslint-config` with `pnpm: true` and `formatters: true` defaults
- User-provided options take precedence via `defu` deep merge
- Supports all options and user configs from `@antfu/eslint-config`

## Installation

```bash
pnpm add -D @enms/eslint-config @antfu/eslint-config eslint eslint-plugin-format
```

## Usage

Create an `eslint.config.ts` at the root of your project:

```ts
import { enms } from '@enms/eslint-config'

export default enms()
```

### Overriding Defaults

The `enms()` function accepts the same arguments as `antfu()`. User options are merged **on top** of the defaults:

```ts
import { enms } from '@enms/eslint-config'

export default enms(
  { pnpm: true, formatters: { css: false } },
  {
    rules: {
      'no-console': 'warn',
    },
  },
)
```

### With Nuxt

Extend with the Nuxt-generated ESLint config for full Nuxt integration:

```ts
import { enms } from '@enms/eslint-config'
import { withNuxt } from './.nuxt/eslint.config.mjs'

export default withNuxt(enms())
```
