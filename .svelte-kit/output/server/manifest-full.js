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
		client: {start:"_app/immutable/entry/start.DUXLI7iw.js",app:"_app/immutable/entry/app.DFSmTqxL.js",imports:["_app/immutable/entry/start.DUXLI7iw.js","_app/immutable/chunks/B1pZSL6v.js","_app/immutable/chunks/DzH3cHk-.js","_app/immutable/chunks/D-A9m1yF.js","_app/immutable/entry/app.DFSmTqxL.js","_app/immutable/chunks/B1pZSL6v.js","_app/immutable/chunks/D-A9m1yF.js","_app/immutable/chunks/DJBcNWQg.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/secret-santa/2025",
				pattern: /^\/secret-santa\/2025\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
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
