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

const lintCommand = `prettier --config node_modules/react-scripts-lite/config/prettier/.prettierrc.js --ignore-path node_modules/react-scripts-lite/config/prettier/.prettierignore --write .`;

runCommand(lintCommand);
