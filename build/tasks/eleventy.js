import Eleventy from "@11ty/eleventy";

let elev;
export default async function buildEleventy() {
    if(!elev) {
        elev = new Eleventy();
        await elev.watch();
    }

    // Disable caching to ensure a fresh build each time
    await elev.write();
}
