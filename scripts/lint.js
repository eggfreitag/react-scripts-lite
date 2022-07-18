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

const lintCommand = `eslint -c node_modules/react-scripts-lite/config/eslint/.eslintrc.js --ignore-path node_modules/react-scripts-lite/config/eslint/.eslintignore --fix .`;

runCommand(lintCommand);
