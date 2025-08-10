import { beforeEach, describe, it, expect } from 'vitest';

import { setActivePinia, createPinia } from 'pinia';
import { useInventoryStore } from '../inventory';

import { INVENTORY_STORE_NAME } from '../store-configurations';
import 'fake-indexeddb/auto';

describe('InventoryStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('save', () => {
    const store = useInventoryStore();

    store.inventory[1].checked = true;
    store.inventory[2].checked = true;

    store.save(function () {
      const request = indexedDB.open('keyval-store', 1);
      request.onerror = function () {
        throw new Error('I have failed you, Anakin');
      };
      request.onsuccess = function () {
        let db = request.result;
        let transaction = db.transaction('keyval', 'readwrite');
        let objectStore = transaction.objectStore('keyval');
        let record = objectStore.get(INVENTORY_STORE_NAME);
        record.onsuccess = function () {
          const data = {
            inventory: JSON.parse(record.result),
          };
          expect(data).toEqual({
            inventory: expect.arrayContaining([
              {
                handle: 'plattegrond',
                description: 'Plattegrond',
                checked: true,
              },
            ]),
          });
        };
      };
    });
  });
});
