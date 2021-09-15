import { createApp } from 'vue';
import App from './App.vue'
import ContatoListado from './components/ContatoListado.vue'
import FormAdd from './components/FormAdd.vue'

const app = createApp(App)

app.component('form-add',FormAdd)
app.component('contato-listado', ContatoListado)

app.mount('#app');

