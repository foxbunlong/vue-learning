<template>
  <li>
    <div>
      <header>
        <h3>{{ data.title }}</h3>
        <button>Delete</button>
      </header>
    </div>
    <p>{{ data.description }}</p>
    <nav>
      <a :href="data.link" target="_blank">View Resources</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: ['data'],
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
