import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import App from '../../app/app.vue'

describe('app.vue', () => {
  it('renders the HelloWorld component', async () => {
    const wrapper = await mountSuspended(App)

    expect(wrapper.find('h1').text()).toBe('Hello World!')
    expect(wrapper.find('pre').exists()).toBe(true)
  })
})
