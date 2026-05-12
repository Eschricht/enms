import type { UserConfig } from '@commitlint/types'

const Configuration = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
} as const satisfies UserConfig

export default Configuration
