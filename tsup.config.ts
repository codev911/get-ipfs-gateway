import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["lib/index.ts"],
  format: ["cjs", "esm", "iife"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
});