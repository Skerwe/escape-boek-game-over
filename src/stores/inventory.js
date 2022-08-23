import { defineStore } from "pinia";
import { get, set } from "idb-keyval";
import { INVENTORY_STORE_NAME } from "./store-names";

export const useInventoryStore = defineStore({
  id: "inventory",
  state: () => ({
    inventory: [
      {
        handle: "handboeien",
        description: "Elektrische handboeien",
        checked: false,
      },
      {
        handle: "plattegrond",
        description: "Plattegrond",
        checked: false,
      },
      {
        handle: "batterij",
        description: "Batterij",
        checked: false,
      },
      {
        handle: "sleutel",
        description: "Metalen sleutel",
        checked: false,
      },
      {
        handle: "parachute",
        description: "Aangedreven parachute",
        checked: false,
      },
      {
        handle: "snijgun",
        description: "Snijgun",
        checked: false,
      },
      {
        handle: "steen",
        description: "Gegraveerde steen",
        checked: false,
      },
      {
        handle: "schakelaar",
        description: "Klein schakelaar",
        checked: false,
      },
      {
        handle: "wiwapenuitrusting",
        description: "Wiwapenuitrusting",
        checked: false,
      },
      {
        handle: "ijsbron-extract",
        description: "Ijsbron-extract",
        checked: false,
      },
      {
        handle: "vlampistool",
        description: "Vlampistool",
        checked: false,
      },
      {
        handle: "energiebron-extract",
        description: "Onreine energiebron-extract",
        checked: false,
      },
      {
        handle: "bol-der-leegte",
        description: "Bol der leegte",
        checked: false,
      },
      {
        handle: '"mechanisch-voorwerp',
        description: "Vreemd mechanisch voorwerp",
        checked: false,
      },
      {
        handle: "energiekubus",
        description: "Ontladen energiekubus",
        checked: false,
      },
      {
        handle: "ruimteboard",
        description: "Ruimteboard",
        checked: false,
      },
      {
        handle: "energiekern",
        description: "Energiekern",
        checked: false,
      },
      {
        handle: "zuivere-zip",
        description: "Zuivere zip",
        checked: false,
      },
    ],
  }),
  actions: {
    save() {
      set(INVENTORY_STORE_NAME, JSON.stringify(this.inventory))
        .then(() => console.log("Inventory saved!"))
        .catch((err) => console.log("Inventory save failed!", err));
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