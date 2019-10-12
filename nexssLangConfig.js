module.exports = {
  description: "Lua",
  type: "script",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  compiler: "lua",
  extension: ".lua",
  executeCommandLine: "",
  InteractiveShell: "",
  pm: "http://luadist.org/ OR https://luarocks.org/",
  packageManager: {
    win32: "scoop install lua",
    darwin: `curl -L "https://tinyurl.com/luadist" > install.sh &&  sh install.sh`,
    linux: `curl -L "https://tinyurl.com/luadist" > install.sh &&  sh install.sh`
  },
  errors: {
    "'luadist'": {
      win32: "go to http://luadist.org/ and install latest version.",
      darwin: `curl -L "https://tinyurl.com/luadist" > install.sh &&  sh install.sh`,
      linux: `curl -L "https://tinyurl.com/luadist" > install.sh &&  sh install.sh`
    },
    "'lua'": {
      win32: "go to http://luadist.org/ and install latest version.",
      darwin: "brew install lua",
      linux:
        "sudo apt-get install lua5.3 -y OR specify your version sudo apt-get install lua<VERSION> -y"
    },
    "module '(.*?)' not found": {
      win32: "luadist install lua <package>",
      darwin: "luadist install lua <package>",
      linux: "luadist install lua <package>"
    }
  },
  url: ""
};
