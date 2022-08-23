import { defineStore } from 'pinia'
import { get, set } from 'idb-keyval'
import { LOCATION_STORE_NAME } from './store-names'

export const useLocationStore = defineStore({
  id: 'location',
  state: () => ({
    location: 0
  }),
  actions: {
    increment() {
      if (this.location + 1 <= 20) {
        this.location++
        this.save()
      }
    },
    decrement() {
      if (this.location - 1 >= 1) {
        this.location--
        this.save()
      }
    },
    save() {
      set(LOCATION_STORE_NAME, this.location)
        .then(() => console.log('Location saved!'))
        .catch((err) => console.log('Location save failed!', err));
    },
    load() {
      get(LOCATION_STORE_NAME).then((stateFromIndexedDB) => {
        console.log(`The location retrieved ${stateFromIndexedDB}`)
        if (stateFromIndexedDB) {
          this.location = stateFromIndexedDB
        }
      })
    }
  }
})
