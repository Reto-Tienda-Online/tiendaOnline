import { createApp } from "vue";
import "@src/style.css";
import './axios.js'
import App from "./App.vue";
import router from '@src/router/index.js';
import store from "./store.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faC,
  faChevronRight,
  faChevronLeft,
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
  faHeart,
  faHeartCrack,
} from "@fortawesome/free-solid-svg-icons";

//Cada icono debe ser añadido e importado
library.add(
  faCoffee,
  faUser,
  faChevronDown,
  faShoppingCart,
  faChevronRight,
  faChevronLeft,
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
  faHeart,
  faHeartCrack,
);

const app = createApp(App);

app.use(store);
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
