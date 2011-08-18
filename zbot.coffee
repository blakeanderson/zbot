Campfire = require("./lib/vendor/campfire").Campfire
Commands = require("./lib/commands")

instance = new Campfire {
  ssl     : true,
  token   : "a89c521bdd2c45f0dc9dc3651420289549a08900",
  account : "blakeanderson"
}

room_id = 427831

instance.join (room_id), (error, room) ->
	console.log "Joining room"
	room.listen (message) ->
		task.listen( message, room ) for task in [Commands]
