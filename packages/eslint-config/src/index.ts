import { antfu } from '@antfu/eslint-config'
import { defu } from 'defu'

export function enms(...args: Parameters<typeof antfu>): ReturnType<typeof antfu> {
  const [options, ...userConfigs] = args
  return antfu(defu(options, {
    pnpm: true,
    formatters: true,
  }), ...userConfigs)
}

export default enms
