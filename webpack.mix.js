const mix = require('laravel-mix');

mix.override((config) => {
  delete config.watchOptions;
});

mix.browserSync({
  proxy: process.env.SITE_URL,
  host: new URL(process.env.SITE_URL).hostname,
  open: 'external',
  files: ['assets/**/*', 'templates/**/*'],
});
mix.setPublicPath('./web');
mix.js('assets/js/main.js', 'assets/js');
mix.postCss('assets/css/main.css', 'assets/css');
mix.version();
