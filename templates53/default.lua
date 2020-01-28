-- Nexss PROGRAMMER 2.0.0 - Lua
-- Default template for JSON Data
json = require "json"
-- STDIN
local NexssStdin = io.read()
local parsedJson = json.decode(NexssStdin)

-- Modify Data
parsedJson['test'] = "test"

local NexssStdout = json.encode(parsedJson)
-- STDOUT
io.write(NexssStdout)