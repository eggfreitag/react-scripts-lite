const path = require("path");
const execSync = require("child_process").execSync;

const runCommand = (command) => {
  execSync(`${command}`, { stdio: "inherit" });

  return true;
};

const esLintRcPath = path.join("./config/eslint/.eslintrc.js");
const esLintIgnorePath = path.join("./config/eslint/.eslintignore");

const lintCommand = `eslint -c ${path.resolve(
  process.cwd(),
  esLintRcPath,
)} --ignore-path ${path.resolve(process.cwd(), esLintIgnorePath)} --fix .`;

try {
  runCommand(lintCommand);
} catch (error) {}
