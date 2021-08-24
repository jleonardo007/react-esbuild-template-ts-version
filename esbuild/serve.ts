import { createServer } from "http";
import { promises } from "fs";
import { join } from "path";
import { serve } from "esbuild";
import { serveOptions, transformOptions } from "./config";
import { DEV_SERVER_PORT, DEV_SERVER_URL, PUBLIC_PATH } from "./config";
import open from "open";

const { readFile } = promises;

function startDevServer() {
  createServer(async (...args) => {
    const res = args[1];
    try {
      const publicHTML = await readFile(join(PUBLIC_PATH, "index.html"), { encoding: "utf-8" });
      res.end(publicHTML);
    } catch (error) {
      console.log(error);
    }
  }).listen(DEV_SERVER_PORT, () => {
    console.log(`Development server is now running at ${DEV_SERVER_URL}`);
  });
}

(async () => {
  const server = await serve(serveOptions, transformOptions);
  const { host: HOST, port: PORT } = server;

  console.log("ESBuild is now serving your files at:");
  console.table({ HOST, PORT });

  startDevServer();
  await open(DEV_SERVER_URL);
})();
