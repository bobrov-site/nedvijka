import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons'; // Import the home icon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faHome); // Add the home icon to the library
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});