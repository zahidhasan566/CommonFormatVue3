import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import Login_boxed from "../views/auth/login_boxed.vue";
// import { baseurl } from "../base_url";  // Make sure baseurl is correctly set
const baseurl = require('../base_url');
// Direct imports instead of lazy loading
import Dashboard from '../views/dashboard/Dashboard.vue';
import Index2 from '../views/Index2.vue';
import login from '../views/auth/login.vue';
import UserIndex from '../views/users/userIndex.vue';

const routes = [
    {
        path: '/index2',
        name: 'index2',
        component: Index2,  // Direct import
        meta: { requiresAuth: true },  // Protect this route
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,  // Direct import
        meta: { requiresAuth: true },  // Protect this route
    },
    {
        path: '/usermanager/user-list',  // ✅ Absolute path
        name: 'user-list',
        component: UserIndex,  //
        meta: { requiresAuth: true }
    },
    {
        path: '/setup/expense-approval',  // ✅ Absolute path
        name: 'expense-approval',
        component: Index2,  //
        meta: { requiresAuth: true }
    },
    // auth
    {
        path: '/',
        name: 'login-boxed',
        component: () => Login_boxed,
        meta: { layout: 'auth' },
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token');
            if (token) {
                next({ name: 'Dashboard' });  // Redirect to dashboard if already logged in
            } else {
                next();  // Otherwise, continue to the login page
            }
        },
    },
    {
        path: '/components/modals',
        name: 'modals',
        component: () => import(/* webpackChunkName: "components-modals" */ '../views/components/modals.vue'),
    },
    {
        path: '/pages/error404',
        name: 'error404',
        component: () => import(/* webpackChunkName: "pages-error404" */ '../views/pages/error404.vue'),
        meta: { layout: 'auth' },
    },
];

// Check if the token exists for protected routes
const checkToken = (to, from, next) => {
    const token = localStorage.getItem('token');
    if (to.meta.requiresAuth && (!token || token === 'undefined' || token === '')) {
        next({ name: 'login-boxed' });  // Redirect to login if no token
    } else {
        next();  // Allow navigation
    }
};

const router = createRouter({
    history: createWebHistory(baseurl),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

// Global beforeEach guard to check authentication before navigation
router.beforeEach((to, from, next) => {
    console.log('Navigating to:', to.name, to.path, to.fullPath);

    // Set layout based on route meta
    if (to.meta && to.meta.layout && to.meta.layout == 'auth') {
        store.commit('setLayout', 'auth');
    } else {
        store.commit('setLayout', 'app');
    }

    // Check if the route requires authentication
    checkToken(to, from, next);
});

export default router;
