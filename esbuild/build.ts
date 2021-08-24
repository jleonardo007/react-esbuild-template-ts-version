import { promises } from "fs";
import { join } from "path";
import { buildSync } from "esbuild";
import {
  PUBLIC_PATH,
  buildOptions,
  DEV_LINK_TAG,
  DEV_SCRIPT_TAG,
  BUILD_LINK_TAG,
  BUILD_SCRIPT_TAG,
  HTML_COMMENTS,
} from "./config";

const { readFile, writeFile, copyFile } = promises;

async function createHTMLFileAtBuildPath() {
  await copyFile(join(PUBLIC_PATH, "favicon.ico"), join("build", "favicon.ico"));
  await copyFile(join(PUBLIC_PATH, "manifest.json"), join("build", "manifest.json"));
  await copyFile(join(PUBLIC_PATH, "robots.txt"), join("build", "robots.txt"));

  const HTMLFileAtPublicPath = await readFile(join(PUBLIC_PATH, "index.html"), {
    encoding: "utf-8",
  });
  const HTMLFileAtBuildPath = HTMLFileAtPublicPath.replace(
    HTML_COMMENTS,
    "<!--Files generate by ESbuild-->"
  )
    .replace(DEV_LINK_TAG, BUILD_LINK_TAG)
    .replace(DEV_SCRIPT_TAG, BUILD_SCRIPT_TAG);

  writeFile(join("build", "index.html"), HTMLFileAtBuildPath, { encoding: "utf8" });
  console.log("Your build has been created succesfully");
}

buildSync(buildOptions);
createHTMLFileAtBuildPath();
