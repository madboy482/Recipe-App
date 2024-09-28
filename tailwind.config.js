/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1D4ED8',
                secondary: '#9333EA',
                accent: '#FBBF24',
                neutral: '#F3F4F6',
                background: '#FFFFFF',
                text: '#111827',
                muted: '#6B7280',
                success: '#22C55E',
                error: '#EF4444',
                'dark-background': '#1E1E2D',
                'dark-text': '#E5E5E5',
                'dark-muted': '#B0B0B0',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
