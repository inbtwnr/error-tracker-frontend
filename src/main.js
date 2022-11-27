import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
import router from "./router";
const pinia = createPinia();
import App from "./App.vue";
import "./index.scss";
import "@formkit/themes/genesis";
import "flowbite";

createApp(App).use(router).use(pinia).use(plugin, defaultConfig).mount("#app");
