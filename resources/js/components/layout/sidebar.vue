<template>
    <!--  BEGIN SIDEBAR  -->
    <div class="sidebar-wrapper sidebar-theme">
        <nav ref="menu" id="sidebar">
            <div class="shadow-bottom"></div>

            <perfect-scrollbar class="list-unstyled menu-categories" tag="ul" :options="{ wheelSpeed: 0.5, swipeEasing: !0, minScrollbarLength: 40, maxScrollbarLength: 300, suppressScrollX: true }">

                <li v-for="menu in menus" :key="menu.MenuID" class="menu">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" :data-bs-target="'#' + menu.MenuID" :aria-controls="menu.MenuID" :aria-expanded="isMenuExpanded(menu.MenuID)">
                        <div class="">
                            <span v-html="menu.MenuIcon"></span>
                            <span>{{ menu.MenuName }}</span>
                        </div>
                    </a>

                    <ul :id="menu.MenuID" class="collapse submenu list-unstyled" v-if="menu.sub_menus.length > 0" data-bs-parent="#sidebar">
                        <li v-for="(subMenu, index) in menu.sub_menus" :key="subMenu.SubMenuID">
                            <!-- Fix: Ensure the path is absolute -->
                            <router-link :to="formatPath(subMenu.SubMenuLink)" @click="toggleMobileMenu">
                                {{ subMenu.SubMenuName }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </perfect-scrollbar>

        </nav>
    </div>
    <!--  END SIDEBAR  -->
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useCommon } from '@/composables/useCommon';

const { axiosGet, errorNoti } = useCommon();
const store = useStore();

const menu_collapse = ref('dashboard');
const menus = ref([]);

// Function to ensure path is absolute
const formatPath = (path) => {
    if (!path) return '/';

    // If path already starts with '/', return as is
    if (path.startsWith('/')) {
        return path;
    }

    // Otherwise, prepend '/' to make it absolute
    return '/' + path;
};

// Function to fetch data
const getData = () => {
    axiosGet('app-supporting-data', (response) => {
        menus.value = response.menus;
        console.log(menus);
    }, (error) => {
        errorNoti(error);
    });
};

// Check if menu is expanded or not
const isMenuExpanded = (menuID) => {
    const menu = menus.value.find(m => m.MenuID === menuID);
    if (menu && menu.sub_menus && menu.sub_menus.length > 0) {
        return menu.MenuID === menu_collapse.value;
    }
    return false;
};

onMounted(() => {
    getData();

    const selector = document.querySelector('#sidebar a[href="' + window.location.pathname + '"]');
    if (selector) {
        const ul = selector.closest('ul.collapse');
        if (ul) {
            let ele = ul.closest('li.menu').querySelectorAll('.dropdown-toggle');
            if (ele) {
                ele = ele[0];
                setTimeout(() => {
                    ele.click();
                });
            }
        } else {
            selector.click();
        }
    }
});

// Toggle the mobile sidebar
const toggleMobileMenu = () => {
    if (window.innerWidth < 991) {
        store.commit('toggleSideBar', !store.state.is_show_sidebar);
    }
};
</script>


<style scoped>
/* Add these styles to allow text wrapping */
.sidebar-wrapper .submenu li a {
    white-space: normal !important;
    word-wrap: break-word;
    word-break: break-word;
    line-height: 1.4;
    padding: 8px 20px;
    display: block;
}

/* Also add to main menu items if needed */
.sidebar-wrapper .menu > a {
    white-space: normal !important;
    word-wrap: break-word;
    word-break: break-word;
}

/* Ensure the span inside also wraps */
.sidebar-wrapper .menu > a span {
    white-space: normal !important;
    word-wrap: break-word;
}
</style>
