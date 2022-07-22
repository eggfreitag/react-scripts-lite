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

    const changeFileContent = async (
      targetFilePath,
      oldContent,
      newContent
    ) => {
      try {
        const result = fs.readFileSync(targetFilePath, "utf8");
        const changedFile = await result.replaceAll(oldContent, newContent);

        fs.writeFileSync(targetFilePath, changedFile, "utf8");
      } catch (err) {
        console.log(err);
      }
    };

    const ejectFiles = async (dirArray, callback) => {
      await dirArray.forEach((dir) => {
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
              try {
                fs.mkdirSync(path.join(appDir, dir), { recursive: true });
                fs.renameSync(
                  path.join(reactScriptLiteDir, dir, file),
                  path.join(appDir, dir, file)
                );

                if (file === "webpack.config.js") {
                  changeFileContent(
                    path.join(appDir, "config/webpack.config.js"),
                    "../../../",
                    "../"
                  );
                }
                if (file === "lint.js") {
                  changeFileContent(
                    path.join(appDir, "scripts/lint.js"),
                    "node_modules/react-scripts-lite",
                    ".."
                  );
                }
                if (file === "prettier.js") {
                  changeFileContent(
                    path.join(appDir, "scripts/prettier.js"),
                    "node_modules/react-scripts-lite",
                    ".."
                  );
                }
              } catch (err) {
                console.log(err);
              }
            });
        });
      });

      changeFileContent(
        path.join(appDir, "package.json"),
        /\"eject\"\: \"react-scripts-lite eject\"\,\n/g,
        ""
      );
      changeFileContent(
        path.join(appDir, "package.json"),
        "react-scripts-lite ",
        "node ./scripts/"
      );
    };
    ejectFiles(foldersToEject);
    rl.close();
  }
);
