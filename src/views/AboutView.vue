<template>
  <main class="mx-5 mt-3 mb-5">
    <h2 class="title is-4 has-text-centered mt-2 mb-4">
      {{ $t("pageAbout") }}
    </h2>
    <div
      class="has-text-centered-tablet columns is-flex-direction-column is-gapless mt-5"
    >
      <div class="column">
        <div class="mb-2">
          {{ $t("appDescription") }}
        </div>
        <div class="is-inline-desktop">
          {{ $t("bookDescription") }}
        </div>
        <div class="is-inline-desktop">
          <a
            class="has-text-info-dark"
            href="https://www.de-leukste-kinderboeken.com/producten/escape-boek-game-over-9789000375080"
            target="_blank"
          >
            {{ $t("bookTitle") }}
          </a>
        </div>
      </div>

      <div class="column mt-5">
        <div class="is-inline-block-desktop mr-2">
          <strong class="strong-text">Inventory Companion</strong>
          {{ $t("byText") }}
          <a
            class="has-text-info-dark"
            href="https://indiesagtewerke.dev"
            target="_blank"
            title="Game Development Studio"
          >Indie Sagtewerke</a>.
        </div>
        <div class="is-inline-block-desktop mr-2 mt-2">
          {{ $t("sourceCodeLicensedText") }}
          <a
            class="has-text-info-dark"
            href="https://spdx.org/licenses/LGPL-3.0-or-later.html"
            target="_blank"
            title="GNU General Public License v3.0"
          >GNU GPLv3</a>.
        </div>
        <div class="is-inline-block-desktop mt-2">
          {{ $t("websiteLicensedText") }}
          <a
            class="has-text-info-dark"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            title="Attribution-NonCommercial-ShareAlike License"
          >CC BY NC SA 4.0</a>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.strong-text {
  font-family: "Lato", sans-serif;
  color: var(--color-heading) !important;
}
</style>
