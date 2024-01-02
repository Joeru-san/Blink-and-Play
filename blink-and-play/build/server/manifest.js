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
		client: {"start":"_app/immutable/entry/start.fwJH7_aO.js","app":"_app/immutable/entry/app.Yij5-OeA.js","imports":["_app/immutable/entry/start.fwJH7_aO.js","_app/immutable/chunks/scheduler.DBUx310a.js","_app/immutable/chunks/singletons.66jiVEz1.js","_app/immutable/entry/app.Yij5-OeA.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.DBUx310a.js","_app/immutable/chunks/index.WVKZ9uOM.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-jQmZ4Cgx.js')),
			__memo(() => import('./chunks/1-SJ1vpQKN.js')),
			__memo(() => import('./chunks/2-87wJ0sCt.js')),
			__memo(() => import('./chunks/3-6vCm3m7n.js'))
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
