import { library } from '@fortawesome/fontawesome-svg-core';
import { faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons'; // Import the home icon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faHome, faMessage, faUser); // Add the home icon to the library
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});