<script>
export default {
  data() {
    return {
      inventory: [
        {
          handle: 'handboeien',
          description: 'Elektrische handboeien',
          selected: false
        },
        {
          handle: 'plattegrond',
          description: 'Plattegrond',
          selected: false
        },
        {
          handle: 'batterij',
          description: 'Batterij',
          selected: false
        },
        {
          handle: 'sleutel',
          description: 'Metalen sleutel',
          selected: false
        },
        {
          handle: 'parachute',
          description: 'Aangedreven parachute',
          selected: false
        },
        {
          handle: 'snijgun',
          description: 'Snijgun',
          selected: false
        },
        {
          handle: 'steen',
          description: 'Gegraveerde steen',
          selected: false
        },
        {
          handle: 'schakelaar',
          description: 'Klein schakelaar',
          selected: false
        },
        {
          handle: 'wiwapenuitrusting',
          description: 'Wiwapenuitrusting',
          selected: false
        },
        {
          handle: 'ijsbron-extract',
          description: 'Ijsbron-extract',
          selected: false
        },
        {
          handle: 'vlampistool',
          description: 'Vlampistool',
          selected: false
        },
        {
          handle: 'energiebron-extract',
          description: 'Onreine energiebron-extract',
          selected: false
        },
        {
          handle: 'bol-der-leegte',
          description: 'Bol der leegte',
          selected: false
        },
        {
          handle: '"mechanisch-voorwerp',
          description: 'Vreemd mechanisch voorwerp',
          selected: false
        },
        {
          handle: 'energiekubus',
          description: 'Ontladen energiekubus',
          selected: false
        },
        {
          handle: 'ruimteboard',
          description: 'Ruimteboard',
          selected: false
        },
        {
          handle: 'energiekern',
          description: 'Energiekern',
          selected: false
        },
        {
          handle: 'zuivere-zip',
          description: 'Zuivere zip',
          selected: false
        }
      ]
    }
  }
}
</script>

<template>
  <main class="mx-5 mt-3 mb-5">
    <h2 class="title is-4 has-text-centered mt-2 mb-4">Inventaris</h2>
    <div class="columns is-gapless">
      <div class="column">

        <div class="field" v-for="item in inventory">
          <div class="control">
            <input type="checkbox" :id="item.handle" :name="item.handle">
            <label :for="item.handle" class="checkbox pl-2">{{ item.description }}</label>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<style>
</style>
