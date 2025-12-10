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
		client: {start:"_app/immutable/entry/start.DwEoccCp.js",app:"_app/immutable/entry/app.CdUSEf8g.js",imports:["_app/immutable/entry/start.DwEoccCp.js","_app/immutable/chunks/CCI_7TzI.js","_app/immutable/chunks/5UXqZaJD.js","_app/immutable/chunks/BT1MKXNL.js","_app/immutable/entry/app.CdUSEf8g.js","_app/immutable/chunks/CCI_7TzI.js","_app/immutable/chunks/BT1MKXNL.js","_app/immutable/chunks/DJBcNWQg.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/secret-santa/2025"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
