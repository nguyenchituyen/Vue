import { createApp } from 'vue';
import App from './App.vue';
import { applyPolyfills, defineCustomElements } from 'aperia-dialog-cpn/loader';

applyPolyfills().then(() => {
  defineCustomElements({
    ce: (eventName, opts) => new CustomEvent(eventName.toLowerCase(), opts)
  });
});

createApp(App).mount('#app')
