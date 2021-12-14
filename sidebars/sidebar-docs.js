const sidebars = {
	docs: [
		{
			type: 'doc',
			id: 'intro',
			label: 'Introduction'
		},
		{
			type: 'category',
			label: 'Getting started',
			collapsed: false,
			items: [
				{
					type: 'doc',
					id: 'installation',
					label: 'Installation'
				},
				{
					type: 'doc',
					id: 'playground',
					label: 'Playground'
				}
			]
		},

		{
			type: 'category',
			label: 'Guide',
			items: [
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
				},
				{
					type: 'doc',
					id: 'template-syntax',
					label: 'Template syntax'
				}
			]
		}
	]
}

module.exports = sidebars
