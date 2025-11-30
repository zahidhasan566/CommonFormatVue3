const mix = require('laravel-mix');
const path = require('path');
const { baseurl } = require('./resources/js/base_url');


mix.js('resources/js/main.js', 'public/js')
    .vue({ version: 3 })
    .sass('resources/js/assets/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false
    })
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve('resources/js'),
            },
        },
        output: {
            chunkFilename: 'js/[name].js', // Simplified chunk naming
            publicPath:baseurl, // Your app's base path
        },
    });

if (mix.inProduction()) {
    mix.version();
}
