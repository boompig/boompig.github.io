import "../../../../chunks/false.js";
import { S as escape_html, a as head, l as stringify, n as bind_props, r as element, t as attr_class, x as attr } from "../../../../chunks/server.js";
function Button($$renderer, $$props) {
	let { variant = "primary", size = "medium", disabled = false, href = void 0, type = "button", onclick = void 0, children } = $$props;
	element($$renderer, href ? "a" : "button", () => {
		$$renderer.push(`${attr("href", href)}${attr("disabled", disabled, true)}${attr("type", type)}${attr_class(`btn btn-${stringify(variant)} btn-${stringify(size)}`, "svelte-118lylz")}`);
	}, () => {
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}
function Input($$renderer, $$props) {
	$$renderer.component(($$renderer$1) => {
		let { type = "text", placeholder = "", value = "", disabled = false, required = false, id = "", name = "", variant = "default", size = "medium", label = "", error = "", oninput = void 0, onchange = void 0, onkeydown = void 0 } = $$props;
		let focused = false;
		if (label) {
			$$renderer$1.push("<!--[-->");
			$$renderer$1.push(`<label${attr("for", id)} class="input-label svelte-1tqly6n">${escape_html(label)}</label>`);
		} else $$renderer$1.push("<!--[!-->");
		$$renderer$1.push(`<!--]--> <div${attr_class(`input-wrapper input-${stringify(variant)} input-${stringify(size)}`, "svelte-1tqly6n", {
			"focused": focused,
			"error": error
		})}><input${attr("type", type)}${attr("placeholder", placeholder)}${attr("disabled", disabled, true)}${attr("required", required, true)}${attr("id", id)}${attr("name", name)}${attr("value", value)} class="svelte-1tqly6n"/></div> `);
		if (error) {
			$$renderer$1.push("<!--[-->");
			$$renderer$1.push(`<span class="error-message svelte-1tqly6n">${escape_html(error)}</span>`);
		} else $$renderer$1.push("<!--[!-->");
		$$renderer$1.push(`<!--]-->`);
		bind_props($$props, { value });
	});
}
function EncryptionResult($$renderer, $$props) {
	let { result = "" } = $$props;
	if (result) {
		$$renderer.push("<!--[-->");
		$$renderer.push(`<div class="result-section svelte-ea1rij"><h3 class="svelte-ea1rij">Encryption Result</h3> <pre class="encrypted-output svelte-ea1rij">${escape_html(result)}</pre></div>`);
	} else $$renderer.push("<!--[!-->");
	$$renderer.push(`<!--]-->`);
}
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer$1) => {
		let nameValue = "";
		let encryptedResult = "";
		let error = "";
		let encryptedText = "";
		let decryptionKey = "";
		let ivValue = "";
		let decryptionError = "";
		let isDecryptMode = false;
		function readFromUrl() {
			if (typeof window === "undefined") return;
			const url = new URL(window.location.href);
			const op = url.searchParams.get("op");
			const ct = url.searchParams.get("ct");
			const key = url.searchParams.get("key");
			const iv = url.searchParams.get("iv");
			if (op === "d") isDecryptMode = true;
			if (ct && key && iv) {
				encryptedText = ct;
				decryptionKey = key;
				ivValue = iv;
			}
		}
		if (typeof window !== "undefined") readFromUrl();
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer$2) {
			head("1l8ukcd", $$renderer$2, ($$renderer$3) => {
				$$renderer$3.title(($$renderer$4) => {
					$$renderer$4.push(`<title>Secret Santa 2025 | kats.coffee</title>`);
				});
			});
			$$renderer$2.push(`<h1>Secret Santa 2025</h1> <p>Santa is a secret agent.</p> `);
			if (!isDecryptMode) {
				$$renderer$2.push("<!--[-->");
				$$renderer$2.push(`<section class="encrypt-section svelte-1l8ukcd"><h2 class="svelte-1l8ukcd">Encrypt Name</h2> <form class="svelte-1l8ukcd">`);
				Input($$renderer$2, {
					placeholder: "Enter your name",
					required: true,
					error,
					get value() {
						return nameValue;
					},
					set value($$value) {
						nameValue = $$value;
						$$settled = false;
					}
				});
				$$renderer$2.push(`<!----> `);
				Button($$renderer$2, {
					type: "submit",
					variant: "primary",
					disabled: !nameValue.trim(),
					children: ($$renderer$3) => {
						$$renderer$3.push(`<!---->${escape_html("Encrypt")}`);
					},
					$$slots: { default: true }
				});
				$$renderer$2.push(`<!----></form> `);
				EncryptionResult($$renderer$2, { result: encryptedResult });
				$$renderer$2.push(`<!----> `);
				$$renderer$2.push("<!--[!-->");
				$$renderer$2.push(`<!--]--></section>`);
			} else $$renderer$2.push("<!--[!-->");
			$$renderer$2.push(`<!--]--> <section class="decrypt-section svelte-1l8ukcd"><h2 class="svelte-1l8ukcd">Decrypt Name</h2> <form class="svelte-1l8ukcd">`);
			Input($$renderer$2, {
				placeholder: "Enter encrypted text (base64)",
				required: true,
				error: decryptionError,
				get value() {
					return encryptedText;
				},
				set value($$value) {
					encryptedText = $$value;
					$$settled = false;
				}
			});
			$$renderer$2.push(`<!----> `);
			Input($$renderer$2, {
				placeholder: "Enter key (base64)",
				required: true,
				get value() {
					return decryptionKey;
				},
				set value($$value) {
					decryptionKey = $$value;
					$$settled = false;
				}
			});
			$$renderer$2.push(`<!----> `);
			Input($$renderer$2, {
				placeholder: "Enter IV (base64)",
				required: true,
				get value() {
					return ivValue;
				},
				set value($$value) {
					ivValue = $$value;
					$$settled = false;
				}
			});
			$$renderer$2.push(`<!----> `);
			Button($$renderer$2, {
				type: "submit",
				variant: "secondary",
				disabled: !encryptedText.trim() || !decryptionKey.trim() || !ivValue.trim(),
				children: ($$renderer$3) => {
					$$renderer$3.push(`<!---->${escape_html("Decrypt")}`);
				},
				$$slots: { default: true }
			});
			$$renderer$2.push(`<!----></form> `);
			$$renderer$2.push("<!--[!-->");
			$$renderer$2.push(`<!--]--></section>`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer$1.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer$1.subsume($$inner_renderer);
	});
}
export { _page as default };
