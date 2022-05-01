const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			fontFamily: {
				'mono': ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
			},
			fontSize: {
				sm: ['0.775rem', '1.15rem'],
			},
			colors: {
				gray: colors.zinc,
			},
		},
	},
  plugins: [],
}
