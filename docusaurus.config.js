const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const config = {
	title: 'Costro',
	tagline: '⚡ Build web applications with Components, Store and Router in 3KB!',
	url: 'https://yoriiis.github.io',
	baseUrl: '/costro/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	//   favicon: "img/favicon.ico",
	organizationName: 'yoriiis',
	projectName: 'costro',
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/yoriiis/costro/edit/dev-docs/docs'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	],
	themeConfig: {
		navbar: {
			title: 'Costro',
			// logo: {
			//   alt: "Costro",
			//   src: 'img/logo.svg',
			// },
			items: [
				{
					type: 'doc',
					docId: 'intro',
					position: 'left',
					label: 'Docs'
				},
				{
					href: 'https://github.com/yoriiis/costro/blob/main/CHANGELOG.md',
					label: 'Changelog',
					position: 'right'
				},
				{
					href: 'https://github.com/yoriiis/costro',
					label: 'GitHub',
					position: 'right'
				}
			]
		},
		footer: {
			style: 'dark',
			copyright: `Created with &#9825; by <a href="http://github.com/yoriiis">@yoriiis</a><br />Copyright &copy; ${new Date().getFullYear()} Costro`
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme
		},
		algolia: {
			appId: 'BH4D9OD16A',
			apiKey: 'YOUR_SEARCH_API_KEY',
			indexName: 'YOUR_INDEX_NAME',
			contextualSearch: true,
			searchParameters: {}
		}
	}
}

module.exports = config
