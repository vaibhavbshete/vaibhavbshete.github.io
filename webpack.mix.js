const mix = require('laravel-mix');

mix.disableNotifications();

mix.css('src/main.css', 'pub/main.css', require('tailwindcss'));