import { createApp } from "vue";

import "./assets/scss/style.scss";

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faFileArrowDown,
  faAnglesRight,
  faAnglesLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

library.add(faFileArrowDown, faAnglesRight, faAnglesLeft, faBars);

import App from "./App.vue";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
