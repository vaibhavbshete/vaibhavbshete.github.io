const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.disableNotifications().setPublicPath('.').version();

mix.css('src/main.css', 'pub/main.css');

mix.browserSync({
    
    server: { baseDir: '.', index: 'index.html' },
    files:[
       './index.html'
     ],
 })
