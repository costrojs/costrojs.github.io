const sidebars = {
	docs: [
		{
			type: 'doc',
			id: 'installation',
			label: 'Installation'
		},
		{
			type: 'category',
			label: 'Guide',
			collapsed: false,
			items: [
				{
					type: 'doc',
					id: 'template-syntax',
					label: 'Template syntax'
				},
				{
					type: 'doc',
					id: 'component',
					label: 'Component'
				},
				{
					type: 'doc',
					id: 'router',
					label: 'Router'
				},
				{
					type: 'doc',
					id: 'application',
					label: 'Application'
				},
				{
					type: 'doc',
					id: 'store',
					label: 'Store'
				}
			]
		}
	]
}

module.exports = sidebars
