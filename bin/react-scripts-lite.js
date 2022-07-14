#!/usr/bin/env node

process.on("unhandledRejection", (err) => {
  throw err;
});

const spawnSync = require("child_process").spawnSync;
const chalk = require("chalk");
const path = require("path");

const args = process.argv.slice(2);
const scriptIndex = args.findIndex(
  (script) => script === "start" || script === "build" || script === "test"
);
const script = scriptIndex === -1 ? null : args[scriptIndex];

if (!script) {
  console.log("Command is not defined");
  process.exit(1);
}

const result = spawnSync("node", [
  path.resolve(__dirname, `../scripts/${script}.js`),
]);

if (result.status !== 0) {
  console.log(
    chalk.yellowBright.bold.italic("\n\n     webpack: Failed to compile\n\n")
  );
  console.log(result.stderr.toString());
} else {
  console.log(
    chalk.yellowBright.bold.italic(
      "\n\n     webpack: Compiled Successfully!\n\n"
    )
  );
}
