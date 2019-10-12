#!/usr/bin/env bash

# Obtain needed dependencies
cmake --version >/dev/null 2>&1 || { echo >&2 "CMake is required, please install CMake (www.cmake.org). On Ubuntu run: sudo apt-get install cmake build-essential.  Aborting."; exit 1; }
git --version >/dev/null 2>&1 || { echo >&2 "Git is required, please install Git. On Ubuntu run: sudo apt-get install git.  Aborting."; exit 1; }

# Clone the repo
git clone  --recursive git://github.com/LuaDist/bootstrap.git _bootstrap

# Make sure LUA_CPATH and LUA_PATH are not set
unset LUA_CPATH
unset LUA_PATH

# Build LuaDist tool
cd _bootstrap && ./bootstrap && mv _install ../LuaDist && cd .. && rm -rf _bootstrap && echo "SUCCESS: You can find Lua and LuaDist in $PWD/LuaDist/bin/"
