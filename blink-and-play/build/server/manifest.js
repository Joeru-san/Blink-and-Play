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
		client: {"start":"_app/immutable/entry/start.TTBTElEl.js","app":"_app/immutable/entry/app.Gn71QyHH.js","imports":["_app/immutable/entry/start.TTBTElEl.js","_app/immutable/chunks/scheduler.DBUx310a.js","_app/immutable/chunks/singletons.wJ1iZQH2.js","_app/immutable/entry/app.Gn71QyHH.js","_app/immutable/chunks/scheduler.DBUx310a.js","_app/immutable/chunks/index.sncjoiQP.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Xr5TW7QM.js')),
			__memo(() => import('./chunks/1-mA_Qe2Cx.js')),
			__memo(() => import('./chunks/2-0jDC0vEb.js')),
			__memo(() => import('./chunks/3-NkoNVzn0.js'))
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
