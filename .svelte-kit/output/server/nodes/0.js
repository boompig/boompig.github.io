import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.kV4jRGi-.js","_app/immutable/chunks/DM3zpvUY.js","_app/immutable/chunks/BLbzM2CZ.js","_app/immutable/chunks/CfCUsBxg.js"];
export const stylesheets = ["_app/immutable/assets/0.mZtcnFXP.css"];
export const fonts = [];
