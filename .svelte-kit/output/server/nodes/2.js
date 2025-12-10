

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DsFREsCC.js","_app/immutable/chunks/D-A9m1yF.js","_app/immutable/chunks/DJBcNWQg.js","_app/immutable/chunks/DDL3eXDt.js"];
export const stylesheets = ["_app/immutable/assets/2.BbUAcvHe.css"];
export const fonts = [];
