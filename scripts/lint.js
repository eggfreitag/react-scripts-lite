const path = require("path");
const execSync = require("child_process").execSync;

const runCommand = (command) => {
  execSync(`${command}`, { stdio: "inherit" });

  return true;
};

const esLintRcPath = path.join(
  "node_modules/react-scripts-lite/config/eslint/.eslintrc.js"
);
const esLintIgnorePath = path.join(
  "node_modules/react-scripts-lite/config/eslint/.eslintignore"
);

const lintCommand = `eslint -c ${esLintRcPath} --ignore-path ${esLintIgnorePath} --fix .`;

runCommand(lintCommand);
