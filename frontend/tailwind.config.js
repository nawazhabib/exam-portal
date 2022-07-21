/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        minHeight: {
            90: "85.9vh",
        },
        fontFamily: {
            sans: ["ui-sans-serif", "system-ui"],
            serif: ["ui-serif", "Georgia"],
            mono: ["ui-monospace", "SFMono-Regular"],
            display: ["Oswald"],
            body: ['"Open Sans"'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1.5rem",
                lg: "2rem",
                xl: "2rem",
                "2xl": "2rem",
            },
        },
        extend: {
            animation: {
                "spin-slow": "spin 3s linear infinite",
            },
            height: {
                90: "85.9vh",
            },
            spacing: {
                xs: "5px",
                sm: "8px",
                md: "12px",
                l: "16px",
                xl: "24px",
                xxl: "32px",
                "2xl": "48px",
                13: "3.25rem",
                15: "3.75rem",
                128: "32rem",
                144: "36rem",
            },

            borderRadius: {
                "4xl": "2rem",
            },
        },
        colors: {
            primary: "#5f27cd",
            "blue-400": "#818cf8",
            "blue-700": "#4338ca",
            "blue-800": "#3730a3",
            blue: "#1fb6ff",
            purple: "#3c40c6",
            "purple-50": "#575fcf",
            red: "#ff3f34",
            "red-50": "#ff5e57",
            "red-400": "#f87171",
            "red-500": "#f43f5e",
            error: "#f43f5e",
            "red-700": "#b91c1c",
            green: "#05c46b",
            "green-50": "#0be881",
            yellow: "#ffd32a",
            orange: "#ffa801",
            black: "#1e272e",
            "gray-50": "#f9fafb",
            "gray-100": "#f3f4f6",
            "gray-200": "#e5e7eb",
            "gray-300": "#d1d5db",
            "gray-400": "#94a3b8",
            "gray-500": "#6b7280",
            "gray-700": "#374151",
            white: "#ffffff",
        },
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        fontSize: {
            xs: ".75rem",
            sm: ".875rem",
            tiny: ".875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
            "7xl": "5rem",
        },
    },
    plugins: [require("@tailwindcss/line-clamp"), require("flowbite/plugin")],
};
