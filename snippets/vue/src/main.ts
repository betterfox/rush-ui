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
import SocialSigninButton from "./components/button/SocialSigninButton.vue";
import SeparateLineWithText from "./components/button/SeparateLineWithText.vue";
import AppLoadingButton from "./components/button/AppLoadingButton.vue";

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(mdiVue, {
  icons: mdijs,
});
app.component("app-input", AppInput);
app.component("app-loading-button", AppLoadingButton);
app.component("social-signin-button", SocialSigninButton);
app.component("separate-line-with-text", SeparateLineWithText);

app.mount("#app");
