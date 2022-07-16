process.on("unhandledRejection", (err) => {
  throw err;
});

process.env.NODE_ENV = "test";

const jest = require("jest");
const path = require("path");
const config = require("../config/jest.config.js");
const myEnvironment = path.resolve(
  process.cwd(),
  "node_modules/jest-environment-jsdom/build/index.js"
);

let args = process.argv.slice(3);

args.push("--config", JSON.stringify(config), "--env", myEnvironment);

jest.run(args);
