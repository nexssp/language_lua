let languageConfig = Object.assign({}, require("./lua.win32.nexss.config"));
let sudo = "sudo ";
if (process.getuid && process.getuid() === 0) {
  sudo = "";
}

languageConfig.compilers = {
  lua53: {
    install: `${sudo}apt install -y lua`,
    command: "lua",
    args: "<file>",
    templates: `templates53`,
  },
};

const {
  replaceCommandByDist,
  dist,
  version,
} = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);

const distName = dist();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case "Debian GNU/Linux":
    languageConfig.compilers.lua53.install = `${sudo}yum install -y lua5.3`;
    languageConfig.compilers.lua53.command = "lua5.3";
    break;
  case "Amazon Linux":
    languageConfig.compilers.lua53.install = `${sudo}yum install -y lua`;
    languageConfig.compilers.lua53.command = "lua";
    break;
  case "Oracle Linux Server":
    const distVersion = version() * 1; // *1 converts to number
    if (distVersion >= 8) {
      languageConfig.compilers.lua53.install = `${sudo}dnf install -y oracle-epel-release-el8 lua`;
      languageConfig.compilers.lua53.command = "lua";
    } else {
      languageConfig.compilers.lua53.install = `${sudo}yum install -y oracle-epel-release-el7 lua lua-json`;
      languageConfig.compilers.lua53.command = "lua";
    }
    break;
  case "Arch Linux":
    languageConfig.compilers.lua53.install = `${sudo}pacman -Sy --noconfirm lua53`;
    break;
  case "Alpine Linux":
    languageConfig.compilers.lua53.install = `${sudo}apk add lua`;
    languageConfig.compilers.lua53.command = "lua";
    break;
  default:
    languageConfig.compilers.lua53.install = replaceCommandByDist(
      languageConfig.compilers.lua53.install
    );
    break;
}

module.exports = languageConfig;
