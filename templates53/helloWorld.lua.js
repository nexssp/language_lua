function getInstaller() {
  switch (process.platform) {
    case "win32":
      return `Powershell -Command "if (Test-Path "src\\json.lua" ) { cd src ; mv json.lua ../json.lua ; cd ..}"`;
    case "linux":
    case "darwin":
      return 'if test -f "src/json.lua"; then cd src ; mv json.lua ../json.lua ; cd .. ; fi;';
    default:
      console.error(`${process.platform} is not implemented.`);
      return ""
  }
}

const config = {
  files: ["json.lua"],
  commands: [getInstaller()],
  repos: ["https://github.com/rxi/json.lua"],
};

module.exports = config;
