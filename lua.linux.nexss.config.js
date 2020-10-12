let languageConfig = Object.assign({}, require("./lua.win32.nexss.config"));

const os = require(`${process.env.NEXSS_SRC_PATH}/node_modules/@nexssp/os/`);
const sudo = os.sudo();

const distName = os.name();
languageConfig.dist = distName;

languageConfig.compilers = {
  lua53: {
    install: `${sudo}apt install -y lua`,
    command: "lua",
    args: "<file>",
    templates: `templates53`,
  },
};

// TODO: Later to cleanup this config file !!
switch (distName) {
  case os.distros.DEBIAN:
  case os.distros.UBUNTU:
    languageConfig.compilers.lua53.install = `${sudo}apt install -y lua5.3`;
    languageConfig.compilers.lua53.command = "lua5.3";
    break;
  case os.distros.AMAZON:
    languageConfig.compilers.lua53.install = `${sudo}yum install -y lua`;
    languageConfig.compilers.lua53.command = "lua";
    break;
  case os.distros.ORACLE:
    const distVersion = os.v() * 1; // *1 converts to number
    if (distVersion >= 8) {
      languageConfig.compilers.lua53.install = `${sudo}dnf install -y oracle-epel-release-el8 lua`;
      languageConfig.compilers.lua53.command = "lua";
    } else {
      languageConfig.compilers.lua53.install = `${sudo}yum install -y oracle-epel-release-el7 lua lua-json`;
      languageConfig.compilers.lua53.command = "lua";
    }
    break;
  case os.distros.ARCH:
    languageConfig.compilers.lua53.install = `${sudo}pacman -Sy --noconfirm lua53`;
    break;
  case os.distros.ALPINE:
    languageConfig.compilers.lua53.install = `${sudo}apk add lua`;
    languageConfig.compilers.lua53.command = "lua";
    break;
  default:
    languageConfig.compilers.lua53.install = os.replacePMByDistro(
      languageConfig.compilers.lua53.install
    );
    break;
}

module.exports = languageConfig;
