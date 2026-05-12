import enms from '@enms/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  await enms(),
)
