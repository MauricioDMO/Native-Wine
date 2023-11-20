/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'native-land': ['Native Land'],
			},
			colors: {
				'primary-0': '#e3ae2e', 
				'primary-1': '#f6c756',
				'secondary-1-0': '#2db825',
				'secondary-1-1': '#4cc746',
				'secondary-2-0': '#e12e32',
				'secondary-2-1': '#f45559',
				'complement-0': '#2f429b', 
				'complement-1': '#4859a8',
			}
		},
	},
	plugins: [],
}

