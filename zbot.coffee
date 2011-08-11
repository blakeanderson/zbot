Campfire = require("./lib/vendor/campfire").Campfire

instance = new Campfire {
  ssl     : true,
  token   : "a89c521bdd2c45f0dc9dc3651420289549a08900",
  account : "blakeanderson"
}

room_id = 427831

instance.join (room_id), (error, room) ->
	console.log "Joining room"
	room.listen (message) ->
		if message.body is "PING"
			console.log "PING received"
			room.speak ("PONG"), (error, response) ->
				console.log "PONG sent at" + response.message.created_at + "."
		else
			console.log "Received unknown message"	