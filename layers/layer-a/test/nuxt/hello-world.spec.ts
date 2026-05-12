import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import { HelloWorld } from '#components'

describe('helloWorld', () => {
  it('renders the heading', async () => {
    const wrapper = await mountSuspended(HelloWorld)

    expect(wrapper.find('h1').text()).toBe('Hello World!')
  })

  it('renders app config via useAppConfig', async () => {
    const wrapper = await mountSuspended(HelloWorld)

    const pre = wrapper.find('pre')
    expect(pre.exists()).toBe(true)
    expect(pre.text()).toContain('My amazing Nuxt layer (overwritten)')
  })
})
