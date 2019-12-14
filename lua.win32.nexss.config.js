let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Lua";
languageConfig.description =
  "Lua is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural programming, object-oriented programming, functional programming, data-driven programming, and data description.";
languageConfig.url = "https://www.lua.org";
languageConfig.extensions = [".lua"];
languageConfig.builders = {};
languageConfig.compilers = {
  lua: {
    install: "scoop install lua-for-windows",
    command: "lua",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.lua.errors");
languageConfig.languagePackageManagers = {
  luapm: {
    installation: "PowerShell.exe -File installLuaPackageManager.ps1",
    messageAfterInstallation: "",
    installed: "luapm installed",
    search: "luapm search",
    install: "luapm require",
    uninstall: "luapm remove",
    help: "luapm",
    version: "luapm version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "luapm"
  }
};

module.exports = languageConfig;
