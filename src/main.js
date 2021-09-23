import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/scss/style.scss'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronRight,faChevronLeft);

// import 'virtual:windi.css'
// import 'virtual:windi-devtools'

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app');
