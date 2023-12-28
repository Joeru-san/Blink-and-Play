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
		client: {"start":"_app/immutable/entry/start.I3tA25bH.js","app":"_app/immutable/entry/app.Sj5Ggpxu.js","imports":["_app/immutable/entry/start.I3tA25bH.js","_app/immutable/chunks/scheduler.DBUx310a.js","_app/immutable/chunks/singletons.P8TqTLp6.js","_app/immutable/entry/app.Sj5Ggpxu.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.DBUx310a.js","_app/immutable/chunks/index.Zxmpjznd.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-3yzsIlD-.js')),
			__memo(() => import('./chunks/1-Pk-ifRBN.js')),
			__memo(() => import('./chunks/2-Mbd1mV-y.js')),
			__memo(() => import('./chunks/3-obWoe9B0.js'))
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
