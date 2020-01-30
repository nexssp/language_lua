const config = {
  files: ["json.lua"],
  commands: [
    `Powershell -Command "if (Test-Path src ) { cd src ; mv json.lua ../json.lua ; cd ..}"`
  ],
  repos: ["https://github.com/rxi/json.lua"]
};

module.exports = config;
