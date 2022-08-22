module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	extends: [
		'standard',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'standard-with-typescript',
		'eslint-config-prettier'
	],
	overrides: [],
	parserOptions: {
		ecmaFeatures: {
			tsx: true,
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {}
};
