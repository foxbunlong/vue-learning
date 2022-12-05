<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="isVisible">{{ courseGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="showHideGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <h3>{{ count }}</h3>
  <button @click="updateCount">Update count</button>
  <!-- => Ref Object -->
  <h3 v-if="isVisible">{{ courseInfo.title }}</h3>
  <h3>{{ courseInfo.count }}</h3>
  <button @click="updateContent">Update count and name with Ref</button>
  <!-- => Reactive Object -->
  <h3 v-if="isVisible">{{ courseInfoReactive.title }}</h3>
  <h3>{{ courseInfoReactive.count }}</h3>
  <button @click="updateContentReactive">
    Update count and name with Reactive
  </button>
  <!-- Task 4: Also solve the assignment with the Options API -->
  <!-- Prevous ways of learning -->
</template>

<script setup>
import { ref, reactive } from 'vue';

const courseGoal = 'Understand Vue';
const isVisible = ref(true);
const count = ref(0);
const courseInfo = ref({
  title: 'Old Course',
  count: 0,
});
const courseInfoReactive = reactive({
  title: 'Old Course',
  count: 0,
});

const showHideGoal = () => {
  isVisible.value = !isVisible.value;
};

const updateCount = () => {
  count.value++;
};

const updateContent = () => {
  courseInfo.value.title = 'Course updated';
  courseInfo.value.count++;
};

const updateContentReactive = () => {
  courseInfoReactive.title = 'Course updated';
  courseInfoReactive.count++;
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
