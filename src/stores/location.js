import { defineStore } from "pinia";
import { get, set } from "idb-keyval";
import {
  LOCATION_STORE_NAME,
  MAX_LOCATION_VALUE,
} from "./store-configurations";

export const useLocationStore = defineStore({
  id: "location",
  state: () => ({
    location: 0,
  }),
  actions: {
    increment() {
      if (this.location + 1 <= MAX_LOCATION_VALUE) {
        this.location++;
        this.save();
      }
    },
    decrement() {
      if (this.location - 1 >= 1) {
        this.location--;
        this.save();
      }
    },
    save(doneCallback, errorCallBack) {
      set(LOCATION_STORE_NAME, this.location)
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
      get(LOCATION_STORE_NAME).then((stateFromIndexedDB) => {
        if (stateFromIndexedDB) {
          this.location = stateFromIndexedDB;
        }
      });
    },
  },
});
