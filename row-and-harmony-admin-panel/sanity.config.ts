import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { iconify } from "sanity-plugin-iconify";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/schemaTypes";

export default defineConfig({
    name: "default",
    title: "Admin Panel | Row and Harmony",

    projectId: "d0j9e2sb",
    dataset: "production",

    plugins: [iconify({ collections: ["hugeicons"] }), structureTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
});
