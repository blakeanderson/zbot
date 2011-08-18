Command = require('./models').command
_ = require('./underscore')._

commands =[
	{ name: 'weather', location: './commands/weather.js' }
]

api =

	commands: commands

	executeCommand: ( location ) ->
		requested_command = require(location)
		return requested_command.execute()

	logger: ( d ) ->
		try
			console.log "#{d.message.created_at}: #{d.message.body}"

	listen: ( message, room ) ->
		console.log "listening"
		_.each api.commands, ( command ) ->
			return if command.name != message.body
			console.log "#{command.name} command received"
			room.speak api.executeCommand( command.location ), api.logger

module.exports = api
