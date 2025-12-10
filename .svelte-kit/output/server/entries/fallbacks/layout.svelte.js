import "../../chunks/false.js";
import "../../chunks/server.js";
function Layout($$renderer, $$props) {
	let { children } = $$props;
	children($$renderer);
	$$renderer.push(`<!---->`);
}
export { Layout as default };
