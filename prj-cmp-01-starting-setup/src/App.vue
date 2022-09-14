<template>
  <TheHeader title="Homepage"></TheHeader>
  <StoredResource :resources="resources" />
</template>

<script>
import StoredResource from './components/resources/StoredResource.vue';
import TheHeader from './components/layouts/TheHeader.vue';
export default {
  components: { StoredResource, TheHeader },
  data() {
    return {
      resources: [
        {
          id: 1,
          title: 'Official guide',
          description: 'Vue official homepage',
          link: 'https://vuejs.org',
        },
        {
          id: 2,
          title: 'Google',
          description: 'Google everything here',
          link: 'https://google.com.vn',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
