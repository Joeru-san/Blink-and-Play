const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["BlinkAndPlayLogo.webp","core-actions/actions.webp","core-actions/drinks.webp","core-actions/foods.webp","core-actions/speak.webp","dark-theme.webp","favicon.png","get-it-done.webp","light-theme.webp","pre-made.webp"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Gkr-7uu8.js","app":"_app/immutable/entry/app.SWYmFiAM.js","imports":["_app/immutable/entry/start.Gkr-7uu8.js","_app/immutable/chunks/scheduler.BPJIHPan.js","_app/immutable/chunks/singletons.cwRqKWWS.js","_app/immutable/chunks/index.omZBMsqy.js","_app/immutable/entry/app.SWYmFiAM.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.BPJIHPan.js","_app/immutable/chunks/index.5AU-O-3c.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-jTeyMdUp.js')),
			__memo(() => import('./chunks/1-Lu8zdRKV.js')),
			__memo(() => import('./chunks/2-bfAeDlYI.js')),
			__memo(() => import('./chunks/3-pE-Fy1BB.js'))
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
