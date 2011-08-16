Command = require('./models').command
_ = require('underscore')._

commands =[
	{ name: 'weather', location: './commands/weather.js' }

]

api =
	
	executeCommand: ( location ) ->
		command = require(location)
		return command.execute

	logger: ( d ) ->
		try
			console.log "#{d.message.created_at}: #{d.message.body}"

	listen: ( message, room ) ->
		_.each api.commands, ( command ) ->
			return if commands.name.test( message.body ) is false
			room.speak api.executeCommand( command.location ), api.logger

module.exports = api
