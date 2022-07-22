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

    // foldersToEject.forEach((folder) => {
    //   fs.mkdirSync(path.resolve(appDir, folder));
    // });

    const readFiles = async (dirArray, callback) => {
      dirArray.forEach((dir) => {
        fs.readdir(path.join(reactScriptLiteDir, dir), (err, filesArray) => {
          if (err) {
            console.log(err);
            return;
          }

          // console.log("------", path.join(appDir, dir)); //이대로 폴더 만들면 된다
          // console.log(filesArray);

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

          // filesArray
          //   .filter((file) => {
          //     if (file === ".eslintignore") {
          //       return file;
          //     }
          //     if (file === "eslint") {
          //       return file;
          //     }
          //     fs.lstatSync(file).isFile();
          //   })
          //   .forEach((file) => {
          //     console.log(
          //       path.resolve(path.resolve(reactScriptLiteDir, dir), file)
          //     );

          // fs.readFile(
          //   path.resolve(path.resolve(reactScriptLiteDir, dir), file),
          //   "utf8",
          //   (err, content) => {
          //     if (err) {
          //       console.log(err);
          //       return;
          //     }
          //     console.log(content.slice(0, 30));
          //     // callback(
          //     //   path.join(path.join(reactScriptLiteDir, dir), file),
          //     //   content
          //     // );
          //     // callback (oldPath, content=내용)
          // });
        });
      });
    };

    readFiles(foldersToEject);

    const a = (oldPath, content) => {};

    // fs.readFileSync(
    //   path.resolve(appDir, "/node_modules/react-scripts-lite/config/env.js"),
    //   "utf8",
    //   (err, data) => {
    //     if (err) {
    //       console.error(err);
    //     }
    //     console.log("데이터 : >> ", data);
    //   }
    // );
    rl.close();
  }
);
