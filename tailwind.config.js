/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
    ],
    theme: {
        extend: {
            screens: {
                xs: "378px",
                xl2: "1300px",
            }
        }
    },
    plugins: [],
}
