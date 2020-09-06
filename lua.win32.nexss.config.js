let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);
languageConfig.title = "Lua";
languageConfig.description =
  "Lua is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural programming, object-oriented programming, functional programming, data-driven programming, and data description.";
languageConfig.url = "https://www.lua.org";
languageConfig.founders = [
  "Roberto Lerusalimschy",
  "Waldemar Celes",
  "Luiz Henrique de Figueiredo",
];
languageConfig.developers = ["PUC-Rio"];
languageConfig.years = ["1993"];
languageConfig.extensions = [".lua"];
languageConfig.builders = {};
languageConfig.compilers = {
  lua53: {
    install: "scoop install lua",
    // switch: "scoop reset lua", // If not exists install will be replaced by reset command
    command: "lua",
    args: "<file>",
    templates: `templates53`,
  },
  // lua54: {
  //   install: `Powershell.exe -ExecutionPolicy Bypass -File ${__dirname}/install/installLua54.ps1`,
  //   switch: `Powershell.exe -ExecutionPolicy Bypass -File ${__dirname}/install/switchToLua54.ps1`,
  //   command: "lua",
  //   args: "<file>",
  //   template: `templates54`
  // },
  lua51: {
    install: "scoop install lua-for-windows",
    command: "lua",
    args: "<file>",
    templates: `templates`,
  },
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
    version: "lua -v",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "luarocks",
  },
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
