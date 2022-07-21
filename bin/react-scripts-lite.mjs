#!/usr/bin/env node

process.on("unhandledRejection", (err) => {
  throw err;
});

import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const scriptIndex = args.findIndex(
  (script) =>
    script === "start" ||
    script === "build" ||
    script === "test" ||
    script === "lint" ||
    script === "prettier"
);
const script = scriptIndex === -1 ? null : args[scriptIndex];

const result =
  script !== "build"
    ? spawnSync(
        "node",
        [
          path.resolve(__dirname, `../scripts/${script}`),
          args.filter((value) => value !== script),
        ],
        { stdio: "inherit" }
      )
    : spawnSync("node", [
        path.resolve(__dirname, `../scripts/${script}`),
        args.filter((value) => value !== script),
      ]);

if (result.status !== 0 && script === "build") {
  console.log(
    chalk.yellowBright.bold.italic("\n\n     webpack: Failed to compile\n\n")
  );
  console.log(chalk.bgRedBright("Error"), result.stderr.toString());
}

if (result.status === 0 && script === "build") {
  console.log(
    chalk.yellowBright.bold.italic(
      "\n\n     webpack: Compiled Successfully!\n\n"
    )
  );
}
