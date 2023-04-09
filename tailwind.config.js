module.exports = {
	content: ['{pages,src}/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	important: true, // important in prod
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['light', 'dark'],
	},
};
