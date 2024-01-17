import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faUser } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

//Cada icono debe ser añadido e importado
library.add(faCoffee, faUser, faChevronDown, faShoppingCart);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')