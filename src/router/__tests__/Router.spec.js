import { describe, it, expect, vi } from "vitest";

import App from "../../App.vue";

import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from "@/router";

import { createTestingPinia } from '@pinia/testing';
import "fake-indexeddb/auto";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

describe('routing', async () => {
  router.push('/')
  await router.isReady()

  const wrapper = mount(App, {
    global: {
      plugins: [router, createTestingPinia({
        createSpy: vi.fn,
      })]
    }
  })

  it("route to home page", () => {
    expect(wrapper.html()).toContain('Inventaris')
  });

  it("route to about page", async () => {
    await wrapper.find('a#about-page').trigger('click')
    expect(wrapper.html()).toContain('Inventory Companion')
  });
})
