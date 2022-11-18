/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        extend: {
            fontFamily: {
                body: ['Sono']
            }
        },
    },
    daisyui: {
        themes: [{
            mytheme: {

                "primary": "#f4aa5a",

                "secondary": "#9fa1e0",

                "accent": "#61e8c6",

                "neutral": "#1D1623",

                "base-100": "#F3F5F7",

                "info": "#49A8C5",

                "success": "#11833D",

                "warning": "#DEB40D",

                "error": "#E56180",
            },
        }, ],
    },
    plugins: [
        require("daisyui"),
        require('@tailwindcss/forms')
    ],
}