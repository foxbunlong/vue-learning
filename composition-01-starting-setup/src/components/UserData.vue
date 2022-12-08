<template>
  <div>
    From UserData
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <slot></slot>
    END OF From UserData
  </div>
</template>

<script setup>
import {
  computed,
  defineProps,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

const age = inject('userAge');

onBeforeMount(() => {
  console.log('onBeforeMount');
});

onMounted(() => {
  console.log('onMounted');
});

onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
});

onUpdated(() => {
  console.log('onUpdated');
});

onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});

onUnmounted(() => {
  console.log('onUnmounted');
});

const props = defineProps({
  firstName: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  //   age: {
  //     type: Number,
  //     default: 0,
  //   },
});

const userName = computed(() => {
  return props.firstName + ' ' + props.lastName;
});
</script>
