Command = require('./models').command
_ = require('./underscore')._

commands =[
	{ name: 'weather', location: './commands/weather.js' }
]

api =

	commands: commands

	executeCommand: ( location, callback ) ->
		requested_command = require(location)
		requested_command.execute(
			(err, result) ->
				return callback("", result.toString())
		)

	logger: ( d ) ->
		try
			console.log "#{d.message.created_at}: #{d.message.body}"

	listen: ( message, room ) ->
		console.log "listening"
		_.each api.commands, ( command ) ->
			return if command.name != message.body
			console.log "#{command.name} command received"
			api.executeCommand(
			 command.location
			 (err, result) ->
			 	room.speak result
			)

module.exports = api
