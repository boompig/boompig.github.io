

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.buMrtymC.js","_app/immutable/chunks/DM3zpvUY.js","_app/immutable/chunks/BLbzM2CZ.js","_app/immutable/chunks/CfCUsBxg.js"];
export const stylesheets = ["_app/immutable/assets/3.BbUAcvHe.css"];
export const fonts = [];
