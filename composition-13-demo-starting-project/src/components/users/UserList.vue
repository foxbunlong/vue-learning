<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="$emit('list-projects', $event)"
      ></user-item>
    </ul>
  </base-container>
</template>

<script setup>
import { ref, defineProps, computed, watch } from 'vue';
import UserItem from './UserItem.vue';

const props = defineProps(['users']);
// eslint-disable-next-line no-unused-vars
// const emit = defineEmits(['list-projects']);
const enteredSearchTerm = ref('');
const activeSearchTerm = ref('');
const sorting = ref(null);

const availableUsers = computed(() => {
  let users = [];
  if (activeSearchTerm.value) {
    users = props.users.filter((usr) =>
      usr.fullName.toLowerCase().includes(activeSearchTerm.value.toLowerCase())
    );
  } else if (props.users) {
    users = props.users;
  }
  return users;
});

const displayedUsers = computed(() => {
  if (!sorting.value) {
    return availableUsers.value;
  }
  return availableUsers.value.slice().sort((u1, u2) => {
    if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
      return 1;
    } else if (sorting.value === 'asc') {
      return -1;
    } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
      return -1;
    } else {
      return 1;
    }
  });
});

const updateSearch = (val) => {
  enteredSearchTerm.value = val;
};

const sort = (mode) => {
  sorting.value = mode;
};

watch(enteredSearchTerm, (val) => {
  activeSearchTerm.value = val;
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
