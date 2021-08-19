import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('ion-');
app.use(router).mount('#app');
