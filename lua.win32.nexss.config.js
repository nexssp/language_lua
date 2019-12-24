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
  luarocks: {
    installation: "installed with lua-for-windows",
    messageAfterInstallation: "",
    installed: "luarocks list",
    search: "luarocks search",
    install: "luarocks install",
    uninstall: "luarocks remove",
    help: "luarocks",
    version: "luarocks version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "luarocks"
  }
  // TODO: Add luadist
  // luadist: {
  //   installation: "PowerShell.exe -File installLuaDist.ps1",
  //   messageAfterInstallation: "",
  //   installed: "luadist installed",
  //   search: "luadist search",
  //   install: "luadist install",
  //   uninstall: "luadist uninstall",
  //   help: "luadist",
  //   version: "luadist version",
  //   init: () => {},
  //   // if command not found in specification
  //   // run directly on package manager
  //   else: "luadist"
  // }
};

module.exports = languageConfig;
