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

const lintCommand = `eslint -c config/eslint/.eslintrc.js --ignore-path config/eslint/.eslintignore --fix .`;

runCommand(lintCommand);
