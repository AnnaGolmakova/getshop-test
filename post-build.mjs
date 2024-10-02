import * as replaceInFile from "replace-in-file";

const options = {
  files: "dist/**/*.css",
  from: /url\(["']?(\/assets\/[^"')]+)["']?\)/g,
  to: (match) => {
    const path = match.match(/\/assets\/[^"')]+/)[0];
    return `url("https://annagolmakova.github.io/getshop-test${path}")`;
  },
};

try {
  const results = await replaceInFile.replaceInFile(options);
  console.log("Replacement results:", results);
} catch (error) {
  console.error("Error occurred:", error);
}
