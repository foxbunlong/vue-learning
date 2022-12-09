<template>
  <button @click="inc">Increment</button>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

function inc() {
  store.dispatch('increment');
}
</script>
