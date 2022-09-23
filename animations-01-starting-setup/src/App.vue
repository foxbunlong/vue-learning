<template>
  <div class="container">
    <div class="block" :class="{ animate: isAnimated }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition
      name="para"
      @before-enter="beforeEnterAnim"
      @enter="enterAnim"
      @after-enter="afterEnterAnim"
      @before-leave="beforeLeaveAnim"
      @leave="leaveAnim"
      @after-leave="afterLeaveAnim"
      ><p v-if="isTextShowed">AAAAAAAA</p></transition
    >
    <button @click="showHideText">Toggle paragraph</button>
  </div>
  <div class="container">
    <!-- mode out-in kind of wait for the last animation to be finished then call next animation -->
    <transition name="fade-button" mode="out-in">
      <button @click="showUser" v-if="!isUserShowed">Show users</button>
      <button @click="hideUser" v-else>Hide users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      isAnimated: false,
      isTextShowed: false,
      isUserShowed: false,
    };
  },
  methods: {
    beforeEnterAnim(el) {
      console.log('beforeEnterAnim', el);
    },
    enterAnim(el) {
      console.log('enterAnim', el);
    },
    beforeLeaveAnim(el) {
      console.log('beforeLeaveAnim', el);
    },
    leaveAnim(el) {
      console.log('leaveAnim', el);
    },
    afterLeaveAnim(el) {
      console.log('afterLeaveAnim', el);
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.isAnimated = true;
    },
    showHideText() {
      this.isTextShowed = !this.isTextShowed;
    },
    showUser() {
      this.isUserShowed = true;
    },
    hideUser() {
      this.isUserShowed = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-out forwards;
}

/* Vue specific */

.para-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.para-enter-active {
  transition: all 0.3s ease-out;
}

.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-active {
  transition: all 0.3s ease-in;
}

.para-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.v-enter-from {
  /* opacity: 0;
  transform: translateY(-20px); */
}

.v-enter-active {
  /* transition: all 0.3s ease-out; */
  animation: slide-fade 0.3s ease-out;
}

.v-enter-to {
  /* opacity: 1;
  transform: translateY(0); */
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-active {
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
