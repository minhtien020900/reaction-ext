<script setup>
import {ref} from "vue";

const tab = ref('option-1')
const items = ref( [
  { text: 'Real-Time', icon: 'mdi-clock' },
  { text: 'Audience', icon: 'mdi-account' },
  { text: 'Conversions', icon: 'mdi-flag' },
])
</script>

<template>

  <v-card
      class="hihi px-3"
      max-width="300"
  >
    <v-list density="compact">
      <v-list-subheader>REPORTS</v-list-subheader>

      <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
          <p class="v-divider">ssss</p>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>

      </v-list-item>

    </v-list>
  </v-card>

</template>

<style scoped >
.hihi{
  width: 400px;
}
</style>
