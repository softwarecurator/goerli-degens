const config = {
	mode: 'jit',
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dark: '#060a0e'
			}
		},
		fontFamily: {
			protoMono: ['Proto Mono Regular'],
			protoMonoBold: ['Proto Mono Semi Bold'],
			protoMonoMedium: ['Proto Mono Medium'],
			protoMonoLight: ['Proto Mono Light'],
			protoMonoShadow: ['Proto Mono Regular Shadow'],
			protoMonoShadowBold: ['Proto Mono Semi Bold Shadow'],
			protoMonoShadowMedium: ['Proto Mono Medium Shadow'],
			protoMonoShadowLight: ['Proto Mono Light Shadow']
		}
	},

	plugins: []
};

module.exports = config;
