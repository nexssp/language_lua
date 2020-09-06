let languageConfig = Object.assign({}, require("./lua.win32.nexss.config"));
let sudo = "";
if (process.getuid && process.getuid() === 0) {
  sudo = "sudo ";
}
languageConfig.compilers = {
  lua53: {
    install: `${sudo}apt install -y lua5.3`,
    // switch: "scoop reset lua", // If not exists install will be replaced by reset command
    command: "lua5.3",
    args: "<file>",
    templates: `templates53`,
  },
};

module.exports = languageConfig;
