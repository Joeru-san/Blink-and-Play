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
		client: {"start":"_app/immutable/entry/start.nEJAXX0v.js","app":"_app/immutable/entry/app.URjfDNVM.js","imports":["_app/immutable/entry/start.nEJAXX0v.js","_app/immutable/chunks/scheduler.0Fn4ksvD.js","_app/immutable/chunks/singletons.N4BT1hYz.js","_app/immutable/entry/app.URjfDNVM.js","_app/immutable/chunks/scheduler.0Fn4ksvD.js","_app/immutable/chunks/index.dWQ5oyUS.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-QXt7iZEi.js')),
			__memo(() => import('./chunks/1-SZ5P636M.js')),
			__memo(() => import('./chunks/2-Hal6CzeU.js')),
			__memo(() => import('./chunks/3-vL8rjq-f.js'))
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
