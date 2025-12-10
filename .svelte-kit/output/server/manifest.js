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
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/secret-santa/2025/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
