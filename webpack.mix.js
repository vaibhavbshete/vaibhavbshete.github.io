const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.disableNotifications().setPublicPath('./pub').version();

mix.css('src/main.css', 'main.css');

mix.browserSync({
    
    server: { baseDir: '.', index: 'index.html' },
    files:[
       './index.html'
     ],
 })
