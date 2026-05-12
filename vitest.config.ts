import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      thresholds: {
        lines: 100,
        branches: 100,
        functions: 100,
        statements: 100,
        autoUpdate: true,
      },
      exclude: [
        '**/*.css',
        'layers/**/app/app.config.ts',
        'layers/**/.playground/**/*',
        'apps/**/app/app.config.ts',
      ],
    },
    projects: [
      'packages/**/vitest.config.ts',
      'apps/**/vitest.{nuxt,unit}.config.ts',
      'layers/**/vitest.{nuxt,unit}.config.ts',
    ],
  },
})
