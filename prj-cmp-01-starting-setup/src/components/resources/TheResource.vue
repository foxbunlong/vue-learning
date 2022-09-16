<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resource')" :mode="buttonMode"
      >Stored Resource</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" :mode="buttonAddMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';
export default {
  components: { StoredResource, AddResource },
  data() {
    return {
      selectedTab: 'stored-resource',
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
  provide() {
    return {
      resources: this.resources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  computed: {
    buttonMode() {
      return this.selectedTab === 'stored-resource' ? null : 'flat';
    },
    buttonAddMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      this.resources.unshift({
        id: new Date().toISOString(),
        title,
        description,
        link,
      });
      this.selectedTab = 'stored-resource';
    },
    removeResource(id) {
      const resIndex = this.resources.findIndex((e) => e.id === id);
      this.resources.splice(resIndex, 1);
      // This approach replace with brand new array which results in UI not reloaded
      // this.resources = this.resources.filter((e) => e.id !== id);
    },
  },
};
</script>
