# Contributing

## Getting Started

```bash
pnpm install
```

## Development Workflow

```bash
# Lint
pnpm lint
pnpm lint:fix

# Type check
pnpm typecheck

# Run all tests
pnpm test

# Test with coverage (100% threshold)
pnpm test -- --coverage

# Develop the demo app
pnpm --filter @enms/demo dev

# Develop a layer in isolation
pnpm --filter @enms/layer-a dev
```

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org). The pre-commit hook lints staged files and the commit-msg hook validates the message format.

```
feat: add new feature
fix: resolve bug
chore: update dependencies
docs: update readme
refactor: restructure module
test: add coverage
```

## Testing

All packages must maintain **100% test coverage**.

### Running Tests

```bash
pnpm test                 # Run all tests
pnpm test -- --coverage   # With coverage report
pnpm --filter @enms/demo test
```

### Testing Philosophy

- **Test your own code.** Assume third-party packages (Vue, Nuxt, `@nuxt/ui`) are well-tested on their own.
- **Focused tests.** One behavior per test case. Avoid testing multiple unrelated concerns in one test.
- **Assert on your output.** Verify rendered text, returned values, and component presence — not framework internals.

### Test Types

- **Unit tests** — Run under the **node** environment (`vitest.unit.config.ts`) for plain TS/JS. Located in `test/unit/` for Nuxt apps/layers (e.g., `test/unit/sum.spec.ts`), or co-located with source (`src/*.spec.ts`) for standalone packages like `@enms/eslint-config`. Mock external dependencies via `vi.mock`.
- **Nuxt runtime tests** (`test/nuxt/*.spec.ts`) — Run under the **nuxt** environment (`vitest.nuxt.config.ts`). Use `mountSuspended` from `@nuxt/test-utils/runtime`. Test components, composables, pages, and other Nuxt-dependent code.

Test file locations are ultimately determined by each vitest config's `include` patterns. The paths above reflect the common convention in this project.

Choose node tests for utility functions, pure logic, and data transformations that don't depend on Nuxt — they're faster and simpler.

Full testing conventions and patterns are documented in [AGENTS.md](./AGENTS.md#testing).

## Pull Requests

1. Create a branch from `main`
2. Make your changes
3. Ensure `pnpm lint:fix`, `pnpm typecheck`, and `pnpm test -- --coverage` pass
4. Open a PR with a clear description

## Project Conventions

See [AGENTS.md](./AGENTS.md) for detailed project architecture, Nuxt layer patterns, dependency protocols, and code style conventions.
