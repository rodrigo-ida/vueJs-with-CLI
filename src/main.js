import { createApp } from 'vue';
import App from './App.vue'
import ContatinhoListado from './components/ContatinhoListado.vue'
import FormAdd from './components/FormAdd.vue'


const app = createApp(App)


app.component('form-add',FormAdd)
app.component('contatinho-listado', ContatinhoListado)

app.mount('#app');

