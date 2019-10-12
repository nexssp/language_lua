let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Lua";
languageConfig.description =
  "Lua is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural programming, object-oriented programming, functional programming, data-driven programming, and data description.";
languageConfig.url = "https://www.lua.org";
languageConfig.extensions = [".lua"];
languageConfig.builders = {};
languageConfig.compilers = {
  php7: {
    install: "scoop install lua-for-windows",
    command: "lua",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.lua.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: "PowerShell.exe -File installComposer.ps1",
    messageAfterInstallation: "",
    installed: "composer installed",
    search: "composer search",
    install: "composer require",
    uninstall: "composer remove",
    help: "composer",
    version: "composer version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "composer <default> <args>"
  }
};

module.exports = languageConfig;
