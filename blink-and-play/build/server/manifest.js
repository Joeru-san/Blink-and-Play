const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.WDaDy09z.js","app":"_app/immutable/entry/app.3tSsjHtm.js","imports":["_app/immutable/entry/start.WDaDy09z.js","_app/immutable/chunks/scheduler.Yu1FFzJg.js","_app/immutable/chunks/singletons.9MiM2RdZ.js","_app/immutable/entry/app.3tSsjHtm.js","_app/immutable/chunks/scheduler.Yu1FFzJg.js","_app/immutable/chunks/index.94zvhte-.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-kzJ0mMKs.js')),
			__memo(() => import('./chunks/1-TFQp_G_F.js')),
			__memo(() => import('./chunks/2-_HgoRJZQ.js')),
			__memo(() => import('./chunks/3-gEOnVKh6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/svelteroute",
				pattern: /^\/svelteroute\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
