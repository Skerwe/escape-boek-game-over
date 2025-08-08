import { beforeEach, describe, it, expect } from 'vitest';

import { setActivePinia, createPinia } from 'pinia';
import { useLocationStore } from '../location';

import { MAX_LOCATION_VALUE } from '../store-configurations';

import 'fake-indexeddb/auto';

describe('LocationStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('increments', () => {
    const store = useLocationStore();
    expect(store.location).toBe(0);
    store.increment();
    expect(store.location).toBe(1);
  });

  it('decrements', () => {
    const store = useLocationStore();
    store.location = 5;
    store.decrement();
    expect(store.location).toBe(4);
  });

  it('current location cannot be less than 1', () => {
    const store = useLocationStore();
    store.location = 1;
    store.decrement();
    expect(store.location).toBe(1);
  });

  it('current location cannot be more than the MAX_LOCATION_VALUE', () => {
    const store = useLocationStore();
    store.location = MAX_LOCATION_VALUE;
    store.increment();
    expect(store.location).toBe(MAX_LOCATION_VALUE);
  });
});
