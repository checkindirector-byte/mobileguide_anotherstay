import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const html = await readFile(resolve(root, "guide-anotherstay.html"), "utf8");
const js = await readFile(resolve(root, "assets/app.js"), "utf8");

const required = [
  "guide-anotherstay.html",
  "assets/styles.css",
  "assets/app.js",
  "assets/images/hero.webp",
  "assets/images/logo.webp",
  "assets/images/og.jpg",
  "vercel.json"
];
await Promise.all(required.map(file => access(resolve(root, file))));

const refs = [...html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)].map(match => match[1]);
await Promise.all(refs.map(ref => access(resolve(root, ref.slice(1)))));

const forbiddenSecrets = ["8282", "another1234"];
for (const secret of forbiddenSecrets) {
  if (html.includes(secret) || js.includes(secret)) {
    throw new Error(`Public build contains forbidden secret: ${secret}`);
  }
}

new Function(js);
console.log(`Validated ${required.length} required files and ${refs.length} local asset references.`);
