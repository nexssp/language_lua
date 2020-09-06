let languageConfig = Object.assign({}, require("./lua.win32.nexss.config"));
let sudo = "";
if (process.getuid && process.getuid() === 0) {
  sudo = "sudo ";
}
languageConfig.compilers = {
  lua53: {
    install: `${sudo}apt install lua53`,
    // switch: "scoop reset lua", // If not exists install will be replaced by reset command
    command: "lua",
    args: "<file>",
    templates: `templates53`,
  },
};

languageConfig.languagePackageManagers = {
  luarocks: {
    installation: "installed.",
    messageAfterInstallation: "",
    installed: "luarocks list",
    search: "luarocks search",
    install: "luarocks install",
    uninstall: "luarocks remove",
    help: "luarocks",
    version: "lua -v",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "luarocks",
  },
};

module.exports = languageConfig;
