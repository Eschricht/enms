import { describe, expect, it, vi } from 'vitest'

import enms, { enms as namedEnms } from './index'

const { antfu } = vi.hoisted(() => ({
  antfu: vi.fn((opt?: any, ...cfgs: any[]) => ({ opt, cfgs })),
}))

vi.mock('@antfu/eslint-config', () => ({ antfu }))

describe('enms', () => {
  it('exports a function as default export', () => {
    expect(typeof enms).toBe('function')
  })

  it('exports the same function as named export', () => {
    expect(namedEnms).toBe(enms)
  })

  it('merges pnpm and formatters defaults when called without options', () => {
    const result = enms()
    expect(result).toMatchObject({
      opt: {
        pnpm: true,
        formatters: true,
      },
    })
  })

  it('lets user options take precedence over defaults', () => {
    const result = enms({ pnpm: false })
    expect(result).toMatchObject({
      opt: {
        pnpm: false,
        formatters: true,
      },
    })
  })

  it('preserves unrecognized user options alongside defaults', () => {
    const result = enms({ typescript: { tsconfigPath: 'tsconfig.json' } })
    expect(result).toMatchObject({
      opt: {
        pnpm: true,
        formatters: true,
        typescript: { tsconfigPath: 'tsconfig.json' },
      },
    })
  })

  it('passes through additional user configs to antfu', () => {
    const userConfig = { rules: { 'no-console': 'off' } }
    const result = enms({ pnpm: false }, userConfig as any) as any
    expect(result.cfgs).toContain(userConfig)
  })
})
