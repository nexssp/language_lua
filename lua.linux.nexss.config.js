let languageConfig = Object.assign({}, require("./lua.win32.nexss.config"));
let sudo = "sudo ";
if (process.getuid && process.getuid() === 0) {
  sudo = "";
}

languageConfig.compilers = {
  lua53: {
    install: `${sudo}apt install -y lua5.*`,
    // switch: "scoop reset lua", // If not exists install will be replaced by reset command
    command: "lua5.3",
    args: "<file>",
    templates: `templates53`,
  },
};

const {
  replaceCommandByDist,
  dist,
} = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);

const distName = dist();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case "Arch Linux":
    languageConfig.compilers.lua53.install = `${sudo}pacman -Sy --noconfirm lua53`;
    break;
  default:
    languageConfig.compilers.lua53.install = replaceCommandByDist(
      languageConfig.compilers.lua53.install
    );
    break;
}

module.exports = languageConfig;
