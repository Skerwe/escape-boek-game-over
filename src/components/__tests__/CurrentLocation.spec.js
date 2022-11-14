import { describe, it, expect, vi } from "vitest";

import { createTestingPinia } from "@pinia/testing";
import { useLocationStore } from "../../stores/location";

import { mount } from "@vue/test-utils";
import CurrentLocation from "../CurrentLocation.vue";

import "fake-indexeddb/auto";

describe("CurrentLocation", () => {
  const CurrentLocationComponent = {
    components: { CurrentLocation },
    template: `<div><CurrentLocation /></div>`,
  };

  it("renders properly", () => {
    const wrapper = mount(CurrentLocationComponent, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
    expect(wrapper.text()).toContain("Current location:");
  });

  it("increment current location", () => {
    const wrapper = mount(CurrentLocationComponent, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
    wrapper.get('[data-test="increment"]').trigger("click");

    const store = useLocationStore();
    expect(store.increment).toHaveBeenCalledTimes(1);
  });

  it("decrement current location", () => {
    const wrapper = mount(CurrentLocationComponent, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
    wrapper.get('[data-test="decrement"]').trigger("click");

    const store = useLocationStore();
    expect(store.decrement).toHaveBeenCalledTimes(1);
  });
});
