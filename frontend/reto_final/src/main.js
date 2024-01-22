import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
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
} from "@fortawesome/free-solid-svg-icons";
import router from './router.js';

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
  faStar
);

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
