-- Nexss PROGRAMMER 2.0.0 - Lua
-- Lua Hello World
json = require "json"
-- STDIN
local NexssStdin = io.read()
local parsedJson = json.decode(NexssStdin)

-- Modify Data
parsedJson['Hello from Lua'] = _VERSION ..  "!"

-- parsedJson['test'] = "test"

local NexssStdout = json.encode(parsedJson)
-- STDOUT
io.write(NexssStdout)