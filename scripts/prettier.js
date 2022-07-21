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

const prettierRcPath = path.join(
  "node_modules/react-scripts-lite/config/prettier/.prettierrc.js"
);
const prettierIgnorePath = path.join(
  "node_modules/react-scripts-lite/config/prettier/.prettierignore"
);

const lintCommand = `prettier --config ${prettierRcPath} --ignore-path ${prettierIgnorePath} --write .`;

runCommand(lintCommand);
