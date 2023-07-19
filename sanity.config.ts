import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./src/sanity/schemas";
export default defineConfig({
  name: "default",
  title: "PIAIC Sanity Assignment",
  projectId: "g81vi27j",
  dataset: "production",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
