process.on("unhandledRejection", (err) => {
  throw err;
});

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const execSync = require("child_process").execSync;

const appDir = path.resolve(process.cwd());
const reactScriptLiteDir = path.resolve(__dirname, "../");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Are you sure you want to eject? This action is permanent. \nPress (Y) to continue, (n) to cancel\n",
  (answer) => {
    if (answer !== "Y" && answer !== "y") {
      console.log("Canceled...");
      rl.close();
    }

    console.log("Ejecting....");

    const foldersToEject = [
      "config",
      "config/eslint",
      "config/jest",
      "config/prettier",
      "config/webpack",
      "scripts",
    ];

    const ejectFiles = async (dirArray, callback) => {
      dirArray.forEach((dir) => {
        fs.readdir(path.join(reactScriptLiteDir, dir), (err, filesArray) => {
          if (err) {
            console.log(err);
            return;
          }

          filesArray
            .filter((file) => {
              return fs
                .lstatSync(path.join(reactScriptLiteDir, path.join(dir, file)))
                .isFile();
            })
            .forEach((file) => {
              console.log(path.join(reactScriptLiteDir, dir, file));
              console.log(path.join(appDir, dir, file));
              fs.mkdirSync(path.join(appDir, dir), { recursive: true });
              fs.rename(
                path.join(reactScriptLiteDir, dir, file),
                path.join(appDir, dir, file),
                (err) => console.log(err)
              );
            });
        });
      });
    };

    ejectFiles(foldersToEject);
    rl.close();
  }
);
