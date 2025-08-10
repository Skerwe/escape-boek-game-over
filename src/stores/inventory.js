import { defineStore } from 'pinia';
import { get, set } from 'idb-keyval';
import { INVENTORY_STORE_NAME } from './store-configurations';

export const useInventoryStore = defineStore('inventory', {
  state: () => ({
    inventory: [
      {
        handle: 'handboeien',
        description: 'Elektrische handboeien',
        checked: false,
      },
      {
        handle: 'plattegrond',
        description: 'Plattegrond',
        checked: false,
      },
      {
        handle: 'batterij',
        description: 'Batterij',
        checked: false,
      },
      {
        handle: 'sleutel',
        description: 'Metalen sleutel',
        checked: false,
      },
      {
        handle: 'parachute',
        description: 'Aangedreven parachute',
        checked: false,
      },
      {
        handle: 'snijgun',
        description: 'Snijgun',
        checked: false,
      },
      {
        handle: 'steen',
        description: 'Gegraveerde steen',
        checked: false,
      },
      {
        handle: 'schakelaar',
        description: 'Klein schakelaar',
        checked: false,
      },
      {
        handle: 'wapenuitrusting',
        description: 'Wiwapenuitrusting',
        checked: false,
      },
      {
        handle: 'ijsbron',
        description: 'Ijsbron-extract',
        checked: false,
      },
      {
        handle: 'vlampistool',
        description: 'Vlampistool',
        checked: false,
      },
      {
        handle: 'energiebron',
        description: 'Onreine energiebron-extract',
        checked: false,
      },
      {
        handle: 'bol-der-leegte',
        description: 'Bol der leegte',
        checked: false,
      },
      {
        handle: 'mechanisch-voorwerp',
        description: 'Vreemd mechanisch voorwerp',
        checked: false,
      },
      {
        handle: 'energiekubus',
        description: 'Ontladen energiekubus',
        checked: false,
      },
      {
        handle: 'ruimteboard',
        description: 'Ruimteboard',
        checked: false,
      },
      {
        handle: 'energiekern',
        description: 'Energiekern',
        checked: false,
      },
      {
        handle: 'zuivere-zip',
        description: 'Zuivere zip',
        checked: false,
      },
    ],
  }),
  actions: {
    save(doneCallback, errorCallBack) {
      set(INVENTORY_STORE_NAME, JSON.stringify(this.inventory))
        .then(() => {
          if (doneCallback) {
            doneCallback();
          }
        })
        .catch((error) => {
          if (errorCallBack) {
            errorCallBack(error);
          }
        });
    },
    load() {
      get(INVENTORY_STORE_NAME).then((stateFromIndexedDB) => {
        if (stateFromIndexedDB) {
          this.inventory = JSON.parse(stateFromIndexedDB);
        }
      });
    },
  },
});
