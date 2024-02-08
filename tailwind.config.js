import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                darkPrimary: '#1a202c',
                darkSecondary: '#2d3748',
                darkTertiary: "#064663",
                darkQuaternary: "#ECB365",
                lightPrimary: '#ffffff',
                lightSecondary: '#F3F4F6',
                lightTertiary: "#6B7280",
                lightQuaternary: "#000000"
              },
        },
    },

    plugins: [forms],
    darkMode: 'class',
};
