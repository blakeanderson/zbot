(function() {
  var Command, api, commands, _;
  Command = require('./models').command;
  _ = require('./underscore')._;
  commands = [
    {
      name: 'weather',
      location: './commands/weather.js'
    }
  ];
  api = {
    commands: commands,
    executeCommand: function(location) {
      var requested_command;
      requested_command = require(location);
      return requested_command.execute();
    },
    logger: function(d) {
      try {
        return console.log("" + d.message.created_at + ": " + d.message.body);
      } catch (_e) {}
    },
    listen: function(message, room) {
      console.log("listening");
      return _.each(api.commands, function(command) {
        if (command.name !== message.body) {
          return;
        }
        console.log("" + command.name + " Command received");
        return room.speak(api.executeCommand(command.location), api.logger);
      });
    }
  };
  module.exports = api;
}).call(this);
