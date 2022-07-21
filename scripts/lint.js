const path = require("path");
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });

    return true;
  } catch (err) {
    console.log(`Failed to run ${command}`);
    console.log(err);

    return false;
  }
};
const esLintRcPath = path.join(
  "node_modules/react-scripts-lite/config/eslint/.eslintrc.js"
);
const esLintIgnorePath = path.join(
  "node_modules/react-scripts-lite/config/eslint/.eslintignore"
);

const lintCommand = `eslint -c ${esLintRcPath} --ignore-path ${esLintIgnorePath} --fix .`;

runCommand(lintCommand);
