import { createApp } from 'vue'; // Vue 3 entry point
import App from './App.vue'; // Your main App component
import router from './router'; // Vue Router for navigation
import store from './store'; // Vuex or Pinia store for state management
import { createHead } from '@vueuse/head'; // For managing head tags dynamically
import i18n from './i18n'; // For internationalization (i18n)
const baseurl = require('../js/base_url');
// Bootstrap (with window.bootstrap for global access)
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

// Modal styles (custom modal for your app)
import '@/assets/sass/components/custom-modal.scss';

// Perfect Scrollbar (for smooth scrolling in components)
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

// Sweetalert2 (global alert system)
import Swal from 'sweetalert2';
window.Swal = Swal;

// Vue3 Nouislider (for custom range sliders)
import VueNouislider from 'vue3-nouislider';
import 'vue3-nouislider/dist/vue3-nouislider.css';

// Vue Input Mask (for form input masks)
import Maska from 'maska';

// Smooth Scroll (scroll-spy for navigation)
import { registerScrollSpy } from 'vue3-scroll-spy/dist/index';

// Datatables (for handling tables with sorting, filtering, etc.)
import { ClientTable } from 'v-tables-3';

// JSON to Excel (for exporting JSON data to Excel)
import vue3JsonExcel from 'vue3-json-excel';

// Vue Wizard (multi-step forms)
import VueFormWizard from 'vue3-form-wizard';
import 'vue3-form-wizard/dist/style.css';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css'

// App Settings (custom settings for your app, initializing them)
import appSetting from './app-setting';
window.$appSetting = appSetting;
window.$appSetting.init();



// Create the Vue app instance
const app = createApp(App);
// Expose $toaster globally
app.config.globalProperties.$toaster = app.config.globalProperties.$toast;
// Create a single instance
const { axiosGet, axiosPost, errorNoti, successNoti } = useCommon();

// Make them globally available
app.config.globalProperties.$axiosGet = axiosGet;
app.config.globalProperties.$axiosPost = axiosPost;
app.config.globalProperties.$errorNoti = errorNoti;
app.config.globalProperties.$successNoti = successNoti;
// Use the necessary plugins and components


// Mitt
import emitter from './utils/eventBus';

// Make the emitter globally accessible via app.config.globalProperties
app.config.globalProperties.emitter = emitter;

app
    .use(store)
    .use(router)
    .use(i18n)
    .use(PerfectScrollbar)
    .use(VueNouislider)
    .use(Maska)
    .use(ClientTable)
    .use(vue3JsonExcel)
    .use(VueFormWizard)
    .use(createHead())
    .use(Toast, {
        position: POSITION.TOP_RIGHT,
        timeout: 3000,
    });

// Register global components

// Register scroll spy AFTER creating the app instance
registerScrollSpy(app, { offset: 118 });
app.config.globalProperties.mainOrigin = baseurl;
// Mount Vue app to the DOM element with id="app" (changed from "main" to "app" for convention)

import { useCommon } from './composables/useCommon';
// Provide globally
app.provide('emitter', emitter);
app.provide('common', useCommon());
app.mount('#app');



