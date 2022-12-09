<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <router-link to="/products/p2">Product 2</router-link>
  </section>
</template>

<script setup>
import { inject, computed } from 'vue';
import { useRoute } from 'vue-router';

const products = inject('products');
// const props = defineProps(['pid']);

const route = useRoute();

// const selectedProduct = products.value.find((item) => item.id === props.pid);

// Work with props
// const selectedProduct = computed(() =>
//   products.value.find((item) => item.id === props.pid)
// );

// Work with route
const selectedProduct = computed(() =>
  products.value.find((item) => item.id === route.params.pid)
);

const title = computed(() => selectedProduct.value.title);
const price = computed(() => selectedProduct.value.price);
const description = computed(() => selectedProduct.value.description);
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
