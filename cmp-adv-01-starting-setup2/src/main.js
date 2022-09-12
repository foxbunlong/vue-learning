import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BaseCard from "./components/BaseCard.vue";

const app = createApp(App);

// Global components
// Application has to download all components initially - Big problem for very big projects
app.component("base-badge", BaseBadge); // Keep as global component due to usage
app.component("base-card", BaseCard);
// app.component("the-header", TheHeader);
// app.component("badge-list", BadgeList);
// app.component("user-info", UserInfo);

app.mount("#app");
