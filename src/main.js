import "./assets/main.css";
import "primeicons/primeicons.css";
import "vue-toastification/dist/index.css";
import { createApp } from "vue";
import Toast from "vue-toastification";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(Toast);

app.mount("#app");
