Campfire = require("./lib/vendor/campfire").Campfire
Commands = require("./lib/commands")

instance = new Campfire {
  ssl     : true,
  token   : "<TOKEN HERE>",
  account : "<ACCOUNT HERE>"
}

room_id = 427831

instance.join (room_id), (error, room) ->
	console.log "Joining room"
	room.listen (message) ->
		task.listen( message, room ) for task in [Commands]
