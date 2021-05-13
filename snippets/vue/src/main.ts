import { createApp } from "vue";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import "./styles/fonts.scss";
import "./styles/variables.scss";
import "./styles/tailwind.scss";
import "./styles/global.scss";

import AppInput from "./components/form/Input.vue";

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(mdiVue, {
  icons: mdijs,
});
app.component("app-input", AppInput);

app.mount("#app");
