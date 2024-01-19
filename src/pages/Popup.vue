<script setup>
import {onMounted, ref} from "vue";

const items = ref([
  {text: 'Hide message', icon: 'mdi-eye-off'},

])
// const domain = /^https:\/\/laka\.lampart-vn\.com/;

const isHideMsgIncoming = ref(false)
const setHiddenMsgState = (state) => {
  localStorage.setItem('hidden-msg-incoming', state)
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const tabActive = tabs[0]
    chrome.tabs.sendMessage(tabActive.id, {action: 'intercept-notify', value: state})
  })
}
const onUpdate = (value) => {
  isHideMsgIncoming.value = value
  setHiddenMsgState(value)
}
onMounted(() => {
  isHideMsgIncoming.value = localStorage.getItem('hidden-msg-incoming') ?? false
})

</script>

<template>

  <v-card
      class="px-1"
      max-width="300"
      width="250"
  >
    <v-list :lines="false" density="compact">


      <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="green"
          rounded="shaped"
      >
        <template v-slot:prepend>
          <!--              <v-icon   :icon="item.icon"></v-icon>-->


        </template>
        <v-list-item-title>{{ item.text }}</v-list-item-title>

        <template v-slot:append>

          <v-switch
              :model-value="isHideMsgIncoming"
              @update:modelValue="onUpdate"
              hide-details
              color="red"
              false-value="0" true-value="1"
              inset
              flat
              false-icon="mdi-eye"
              true-icon="mdi-check"
          ></v-switch>


        </template>


      </v-list-item>

    </v-list>

  </v-card>

</template>

<style scoped>

</style>
