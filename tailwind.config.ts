/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			// max-width

			'-2xl': { max: '1535px' },
			// => @media (max-width: 1535px) { ... }

			'-xl': { max: '1279px' },
			// => @media (max-width: 1279px) { ... }

			'-lg': { max: '1023px' },
			// => @media (max-width: 1023px) { ... }

			'-md': { max: '767px' },
			// => @media (max-width: 767px) { ... }

			'-sm': { max: '639px' },
			// => @media (max-width: 639px) { ... }
			'-xs': { max: '550px' },

			// min-width
			xs: '551px',
			// => @media (min-width: 551px) { ... }
			xxs: { min: '470px' },

			...defaultTheme.screens,
		},
		colors: {
			primary: '#ed7d31',
			neutral: '#272829',
			pink: '#ff49db',
		},
		extend: {
			fontFamily: {
				fontInter: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
