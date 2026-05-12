import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  format: ['esm'],
  exports: true,
  shims: true,
  dts: true,
  clean: true,
})
