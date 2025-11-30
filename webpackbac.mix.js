const mix = require('laravel-mix');
const path = require('path');

// Basic configuration
mix.js("resources/js/main.js", "public/js")
    .sass("resources/js/assets/sass/app.scss", "public/css")
    .vue({
        version: 3, // or 2 depending on your Vue version
        extractStyles: false, // Try setting this to false for watch mode
    });

// Add options for better compatibility
mix.options({
    processCssUrls: false, // This often fixes CSS issues in watch mode
    postCss: [require('autoprefixer')],
});

// Webpack configuration
mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js/"),
            "@themeConfig": path.resolve(__dirname, "resources/js/theme.config.js"),
        },
    },
    output: {
        chunkFilename: "js/chunks/[name].[chunkhash].js",
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                includePaths: ["node_modules", "resources/js/assets"],
                            },
                        },
                    },
                ],
            },
        ],
    },
    // Add watch options
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300,
    },
});

// Image override (move this before .version())
mix.override((webpackConfig) => {
    webpackConfig.module.rules.forEach((rule) => {
        if (rule.test.toString() === "/(\\.(png|jpe?g|gif|webp|avif)$|^((?!font).)*\\.svg$/)" ) {
            if (Array.isArray(rule.use)) {
                rule.use.forEach((ruleUse) => {
                    ruleUse.options.esModule = false;
                    ruleUse.options.name = "images/[path][name]-[hash].[ext]";
                    ruleUse.options.context = "resources/js/assets/images";
                });
            }
        }
    });
});

// Version should be last
mix.version();
