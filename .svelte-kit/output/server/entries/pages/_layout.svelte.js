import "../../chunks/false.js";
import { a as head, n as bind_props, s as slot } from "../../chunks/server.js";
function Header($$renderer) {
	$$renderer.push(`<header class="svelte-zne36e"><div class="container svelte-zne36e"><div class="header-content svelte-zne36e"><div class="logo-title svelte-zne36e"><img src="/logo.svg" alt="kats.coffee logo" class="logo svelte-zne36e"/> <h1 class="svelte-zne36e"><span class="site-title svelte-zne36e">kats.coffee</span></h1></div> <nav class="svelte-zne36e"><a href="/" class="svelte-zne36e">Home</a> <a href="#about" class="svelte-zne36e">About</a></nav></div></div></header>`);
}
function _layout($$renderer, $$props) {
	const prerender = true;
	head("12qhfyh", $$renderer, ($$renderer$1) => {
		$$renderer$1.push(`<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/> <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap" rel="stylesheet"/>`);
	});
	Header($$renderer, {});
	$$renderer.push(`<!----> <main class="svelte-12qhfyh"><div class="container svelte-12qhfyh"><!--[-->`);
	slot($$renderer, $$props, "default", {}, null);
	$$renderer.push(`<!--]--></div></main>`);
	bind_props($$props, { prerender });
}
export { _layout as default };
