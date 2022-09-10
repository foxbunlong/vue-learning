<template>
  <section>
    <h2>Select a Topic</h2>
    <knowledge-grid
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-grid>
  </section>
</template>

<script>
export default {
  emits: ['select-topic'],
};
</script>
