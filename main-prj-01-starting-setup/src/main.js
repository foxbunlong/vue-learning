import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(router);
app.use(store);

// Common components
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);
// END OF Common components

app.mount('#app');
