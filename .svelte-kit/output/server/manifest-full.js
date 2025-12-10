export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","logo.svg","vite.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.C7iCTOCV.js",app:"_app/immutable/entry/app.CIox4eP8.js",imports:["_app/immutable/entry/start.C7iCTOCV.js","_app/immutable/chunks/N-RrESqn.js","_app/immutable/chunks/COdUzjTX.js","_app/immutable/chunks/DM3zpvUY.js","_app/immutable/entry/app.CIox4eP8.js","_app/immutable/chunks/N-RrESqn.js","_app/immutable/chunks/DM3zpvUY.js","_app/immutable/chunks/BLbzM2CZ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/secret-santa/2025",
				pattern: /^\/secret-santa\/2025\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
