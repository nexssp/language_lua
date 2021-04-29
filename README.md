# Lua implementation for the Nexss PROGRAMMER

To Install Nexss Programmer please go to [Nexss Programmer CLI](https://github.com/nexssp/cli#readme) for more information.

## Examples

### Switch between **Lua** versions

```sh
nexss lua install --progress # installs lua with progress information
nexss lua default compiler # Shows the list of available compilers or nexss lua compilers
nexss lua default compiler lua53 # sets compiler to lua 5.3,
nexss lua default compiler lua51 # sets compiler to lua 5.1
nexss lua default compiler unset # reset to the latest one
# note: you must pass correct compiler name.
```

### Each Lua version has separate template folder

- Lua **5.4** -> templates**54**
- Lua **5.3** -> templates**53**
- Lua **5.1** -> templates

## Interesting Links

[Lua Home](https://www.lua.org)  
[Lua Tutorial 1 (https://www.lua.org/pil/1.html)](https://www.lua.org/pil/1.html)  
[Lua Tutorial 2 (www.tutorialspoint.com)](https://www.tutorialspoint.com/lua/index.htm)  
[Lua Error Explanation](https://wiki.garrysmod.com/page/Lua_Error_Explanation)
