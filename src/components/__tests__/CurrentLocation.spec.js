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
        mocks: {
          $t: (msg) => msg,
        },
      },
    });
    expect(wrapper.text()).toContain("currentLocation");
  });

  it("increment current location", () => {
    const wrapper = mount(CurrentLocationComponent, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
        mocks: {
          $t: (msg) => msg,
        },
      },
    });
    wrapper.get('[data-cy="increment-button"]').trigger("click");

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
        mocks: {
          $t: (msg) => msg,
        },
      },
    });
    wrapper.get('[data-cy="decrement-button"]').trigger("click");

    const store = useLocationStore();
    expect(store.decrement).toHaveBeenCalledTimes(1);
  });
});
