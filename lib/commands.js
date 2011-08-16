(function() {
  var Command, api, commands, _;
  Command = require('./models').command;
  _ = require('underscore')._;
  commands = [
    {
      name: 'weather',
      location: './commands/weather.js'
    }
  ];
  api = {
    executeCommand: function(location) {
      var command;
      command = require(location);
      return command.execute;
    },
    logger: function(d) {
      try {
        return console.log("" + d.message.created_at + ": " + d.message.body);
      } catch (_e) {}
    },
    listen: function(message, room) {
      return _.each(api.commands, function(command) {
        if (commands.name.test(message.body) === false) {
          return;
        }
        return room.speak(api.executeCommand(command.location), api.logger);
      });
    }
  };
  module.exports = api;
}).call(this);
