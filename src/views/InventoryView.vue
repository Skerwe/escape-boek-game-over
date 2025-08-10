<script>
import { useInventoryStore } from '@/stores/inventory';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const inventoryStore = useInventoryStore();
    inventoryStore.load();
    const { inventory } = storeToRefs(inventoryStore);
    const { save } = inventoryStore;

    return {
      inventory,
      save,
    };
  },
};
</script>

<template>
  <main class="mx-5 mt-3 mb-5">
    <h2 class="title is-4 has-text-centered mt-2 mb-4">
      {{ $t('pageInventory') }}
    </h2>
    <div class="columns is-gapless is-centered">
      <div class="column is-narrow">
        <div v-for="(item, index) in inventory" :key="index" class="field">
          <div class="control">
            <input
              :id="item.handle"
              v-model="item.checked"
              type="checkbox"
              data-cy="inventory-checkbox"
              :name="item.handle"
              @change="save()"
            />
            <label :for="item.handle" class="checkbox pl-2">{{
              $t(`items.${item.handle}`)
            }}</label>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
