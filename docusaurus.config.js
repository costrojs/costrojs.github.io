const lightCodeTheme = require('prism-react-renderer/themes/palenight')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const config = {
	title: 'Costro',
	tagline: '⚡ Build web applications with Components, Store and Router in 3 KB!',
	url: 'https://costro.js.org',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	organizationName: 'costrojs',
	projectName: 'costro',
	trailingSlash: false,
	favicon: 'svg/costro-c-bg-round.svg',
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					editUrl: 'https://github.com/costrojs/costrojs.github.io/edit/main',
					sidebarPath: require.resolve('./sidebars/sidebar-docs.js'),
					path: 'docs',
					routeBasePath: 'docs'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	],
	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'tutorial',
				path: 'tutorial',
				routeBasePath: 'tutorial',
				sidebarPath: require.resolve('./sidebars/sidebar-tutorial.js')
			}
		]
	],
	themeConfig: {
		image: 'img/costro-1280-bg.png',
		metadata: [
			{
				name: 'keywords',
				content:
					'costro, costro app, costro js, javascript, components, framework, ui, router, frontend, dom, jsx, store, template-string'
			},
			{
				name: 'google-site-verification',
				content: '9rL5GSeAGw95RpFEFlEbL284EWLZP3lsjQ7WFPCR2j8'
			},
			{
				name: 'robots',
				content: 'index,follow'
			},
			{
				name: 'description',
				content: 'Build web applications with Components, Store and Router in 3KB'
			}
		],
		tableOfContents: {
			minHeadingLevel: 2,
			maxHeadingLevel: 5
		},
		announcementBar: {
			backgroundColor: '#99d98c',
			id: 'announcementBar',
			content: `⭐️&nbsp;&nbsp;If you like <strong>Costro</strong>, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/costrojs/costro">GitHub</a>`
		},
		colorMode: {
			respectPrefersColorScheme: true
		},
		navbar: {
			hideOnScroll: true,
			title: 'Costro',
			logo: {
				alt: 'Costro logo',
				src: 'svg/costro-c-bg-round.svg',
				width: 32,
				height: 32
			},
			items: [
				{
					to: 'docs/installation',
					type: 'doc',
					docId: 'installation',
					position: 'left',
					label: 'Docs'
				},
				{
					to: 'tutorial',
					position: 'left',
					label: 'Tutorial'
				},
				{
					type: 'dropdown',
					label: 'Community',
					position: 'left',
					items: [
						{
							label: 'GitHub Discussions',
							href: 'https://github.com/costrojs/costro/discussions'
						},
						{
							label: 'Contribution Guide',
							href: 'https://github.com/costrojs/costro/blob/main/CONTRIBUTING.md'
						},
						{
							label: 'Changelog',
							href: 'https://github.com/costrojs/costro/blob/main/CHANGELOG.md'
						}
					]
				},
				{
					href: 'https://github.com/costrojs/costro',
					position: 'right',
					className: 'header-githubLink',
					'aria-label': 'GitHub repository'
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
			appId: 'M3SOMQUNNZ',
			apiKey: '9cb998f2a49b8cdffc9a7c1bd00a901e',
			indexName: 'costro-js',
			contextualSearch: true
		}
	}
}

module.exports = config
