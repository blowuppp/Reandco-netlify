import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["pages"],
      models: {
        page: {
          type: "page",
          urlPath: "/{slug}",
          fields: {
            title: { type: "string", required: true },
            content: { type: "markdown", required: true },
          },
        },
        header: {
          type: "object",
          fields: {
            title: { type: "string" },
            description: { type: "string" },
          },
        },
        footer: {
          type: "object",
          fields: {
            text: { type: "string" },
          },
        },
      },
    }),
  ],
  ssgName: "nextjs",
  nodeVersion: "18",
  devCommand: "npm run dev",
  buildCommand: "npm run build",
  publishDir: ".next",
  pageLayoutKey: "type",
  assets: {
    referenceType: "static",
    staticDir: "public",
    uploadDir: "images",
    publicPath: "/",
  },
});
