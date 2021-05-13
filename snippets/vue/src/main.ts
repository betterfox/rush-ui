import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './styles/fonts.scss';
import './styles/variables.scss';
import './styles/tailwind.scss';
import './styles/global.scss';

const app = createApp(App)
app.use(vuetify)
app.use(router)

app.mount('#app')
