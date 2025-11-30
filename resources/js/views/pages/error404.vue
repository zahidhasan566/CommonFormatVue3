<template>
    <div class="layout-px-spacing">
        <div class="error404 text-center">
            <div class="container-fluid">
                <div class="row">
                </div>
            </div>
            <div class="container-fluid error-content">
                <div class="">
                    <h1 class="error-number">404</h1>
                    <p class="mini-text">Ooops!</p>
                    <p class="error-text mb-4 mt-1">The page you requested was not found!</p>
                    <router-link :to="{ name: 'Dashboard' }" class="btn btn-primary mt-5">Go Back</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import '@/assets/sass/pages/error/style-400.scss';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Error 404' });
</script>
