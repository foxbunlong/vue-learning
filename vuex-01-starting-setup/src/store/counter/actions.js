export default {
  // Action allow asynchronous process
  // Working directly with context featured by VueX
  increment(context) {
    console.log('increment');
    setTimeout(() => {
      context.commit('increment', { value: 1 });
    }, 2000);
  },
  increase(context, payload) {
    console.log('increase');
    context.commit('increment', payload);
  },
};
