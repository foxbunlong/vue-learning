import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';

const app = createApp(App);

// use - Connect with 3rd party package
app.use(router);

app.mount('#app');
