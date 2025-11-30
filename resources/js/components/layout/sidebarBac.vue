<template>
    <!--  BEGIN SIDEBAR  -->
    <div class="sidebar-wrapper sidebar-theme">
        <nav ref="menu" id="sidebar">
            <div class="shadow-bottom"></div>

            <perfect-scrollbar class="list-unstyled menu-categories" tag="ul" :options="{ wheelSpeed: 0.5, swipeEasing: !0, minScrollbarLength: 40, maxScrollbarLength: 300, suppressScrollX: true }">
                <li class="menu">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#dashboard" aria-controls="dashboard" aria-expanded="false">
                        <div class="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-home"
                            >
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            <span>{{ $t('dashboard') }}</span>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevron-right"
                            >
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>

                    <ul id="dashboard" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
                        <li>
                            <router-link to="/" @click="toggleMobileMenu">
                                {{ $t('sales') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/index2" @click="toggleMobileMenu">
                                {{ $t('analytics') }}
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li v-for="menu in menus" :key="menu.MenuID" class="menu">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" :data-bs-target="'#' + menu.MenuID" :aria-controls="menu.MenuID" :aria-expanded="isMenuExpanded(menu.MenuID)">
                        <div class="">
                            <span v-html="menu.MenuIcon"></span> <!-- Dynamically render SVG Icon -->
                            <span>{{ menu.MenuName }}</span>
                        </div>
                    </a>

                    <ul :id="menu.MenuID" class="collapse submenu list-unstyled" v-if="menu.sub_menus.length > 0" data-bs-parent="#sidebar">
                        <li v-for="(subMenu, index) in menu.sub_menus" :key="subMenu.SubMenuID">
                            <router-link :to="subMenu.SubMenuLink" @click="toggleMobileMenu">
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

// Use the composable function to access axiosGet and other methods
const { axiosGet, errorNoti } = useCommon();
const store = useStore();

const menu_collapse = ref('dashboard');

// Ref for menus
const menus = ref([]);

// Function to fetch data
const getData = () => {
    console.log("Fetching data...");
    // Calling the axiosGet function from the composable
    axiosGet('app-supporting-data', (response) => {
        menus.value = response.menus; // Update the ref with the response data
        console.log(menus)
    }, (error) => {
        errorNoti(error);
    });
};

// Check if menu is expanded or not
const isMenuExpanded = (menuID) => {
    const menu = menus.value.find(m => m.MenuID === menuID);
    if (menu && menu.sub_menus && menu.sub_menus.length > 0) {
        return menu.MenuID === menu_collapse.value; // Expand the menu if it's the selected menu
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
