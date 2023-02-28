/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const forms = require("@tailwindcss/forms");

module.exports = withMT({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#094c5e",
                secondary: "#7691ad",
            },
            fontFamily: {
                telegraf: "Telegraf",
                "neue-machina": '"Neue Machina"',
                "hsg-ico": "hsg-icons",
            },
            fontSize: {
                "footer-header": ["calc(1.325rem + 0.9vw)", "1.6rem"],
                "footer-button": ["18px", "1.9rem"],
                "footer-text": ["16px", "1.9rem"],
            },
        },
    },
    plugins: [forms],
});