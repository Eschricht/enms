import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import { DemoHero } from '#components'
import App from '~/app.vue'
import IndexPage from '~/pages/index.vue'

describe('app.vue', () => {
  it('mounts and renders the page content', async () => {
    const wrapper = await mountSuspended(App, { route: '/' })

    expect(wrapper.html()).toContain('Hello World!')
    expect(wrapper.html()).toContain('Nuxt UI Demo')
  })
})

describe('index page', () => {
  it('renders HelloWorld and DemoHero', async () => {
    const wrapper = await mountSuspended(IndexPage)

    expect(wrapper.find('h1').text()).toBe('Hello World!')
    expect(wrapper.findComponent(DemoHero).exists()).toBe(true)
  })
})

describe('demoHero', () => {
  it('renders the app config and description', async () => {
    const wrapper = await mountSuspended(DemoHero)

    expect(wrapper.text()).toContain('app extends @enms/layer-a')
    expect(wrapper.text()).toContain('Hello from the Demo App!')
    expect(wrapper.text()).toContain('Nuxt UI Demo')
  })
})
