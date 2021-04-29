let languageConfig = Object.assign({}, require("./lua.win32.nexss.config"));

const sudo = process.sudo;
const distName = process.distro;
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
  case process.distros.DEBIAN:
  case process.distros.UBUNTU:
    languageConfig.compilers.lua53.install = `${sudo}apt install -y lua5.3`;
    languageConfig.compilers.lua53.command = "lua5.3";
    break;
  case process.distros.AMAZON:
  case process.distros.AMAZON_AMI:
    languageConfig.compilers.lua53.install = `${sudo}yum install -y lua`;
    languageConfig.compilers.lua53.command = "lua";
    break;
  case process.distros.ORACLE:
    const distVersion = process.distroVersion * 1; // *1 converts to number
    if (distVersion >= 8) {
      languageConfig.compilers.lua53.install = `${sudo}dnf install -y oracle-epel-release-el8 lua`;
      languageConfig.compilers.lua53.command = "lua";
    } else {
      languageConfig.compilers.lua53.install = `${sudo}yum install -y oracle-epel-release-el7 lua lua-json`;
      languageConfig.compilers.lua53.command = "lua";
    }
    break;
  case process.distros.ARCH:
    languageConfig.compilers.lua53.install = `${sudo}pacman -Sy --noconfirm lua53`;
    break;
  case process.distros.ALPINE:
    languageConfig.compilers.lua53.install = `${sudo}apk add lua`;
    languageConfig.compilers.lua53.command = "lua";
    break;
  default:
    languageConfig.compilers.lua53.install = process.replacePMByDistro(
      languageConfig.compilers.lua53.install
    );
}

module.exports = languageConfig;
