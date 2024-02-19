import { qwikVite } from "@builder.io/qwik/optimizer";
import type { PackageJson } from "type-fest";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import pkg from "./package.json";

const makeRegex = (dep: string) => new RegExp(`^${dep}(/.*)?$`);
const excludeAll = (obj: PackageJson.Dependency) => Object.keys(obj).map(makeRegex);

const { dependencies = {}, peerDependencies = {} } = pkg as PackageJson;

export default defineConfig(() => {
  return {
    build: {
      target: "es2020",
      lib: {
        entry: "./src/index.ts",
        formats: ["es", "cjs"],
        fileName: (format) => `index.qwik.${format === "es" ? "mjs" : "cjs"}`,
      },
      rollupOptions: {
        external: [/^node:.*/, ...excludeAll(dependencies), ...excludeAll(peerDependencies)],
      },
    },
    plugins: [qwikVite(), tsconfigPaths()],
    server: {
      open: true,
    },
  };
});
