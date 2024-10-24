/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "selector",
    theme: {
        extend: {
            colors: {
                green: {
                    primary: {
                        DEFAULT: "rgb(13 148 136)",
                        dark: "rgb(6 78 59)",
                    },
                    secondary: {
                        DEFAULT: "rgb(52 211 153)",
                        hover: "rgb(16 185 129)",
                    },
                },
                gray: {
                    DEFAULT: "rgb(156 163 175)",
                    hover: "rgb(209 213 219)",
                },
            },
        },
    },
    plugins: [],
};
