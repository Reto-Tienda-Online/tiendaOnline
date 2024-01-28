import { createApp } from "vue";
import router from './router/index.js';
import store from './store.js'; 
import "./style.css";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faC,
  faChevronRight,
  faCoffee,
  faShield,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  faDownload,
  faCommentDots,
  faStar,
  faBell,
  faCoins,
  faGamepad,
  faList,
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
  faCircleRight,
  faCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

//Cada icono debe ser añadido e importado
library.add(
  faCoffee,
  faUser,
  faChevronDown,
  faShoppingCart,
  faChevronRight,
  faDownload,
  faShield,
  faCommentDots,
  faStar,
  faBell,
  faCoins,
  faGamepad,
  faList,
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
  faCircleRight,
  faCircleLeft,
);

const app = createApp(App);

app.use(router);
app.use(store)

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
