(function() {
  var Campfire, Commands, instance, room_id;
  Campfire = require("./lib/vendor/campfire").Campfire;
  Commands = require("./lib/commands");
  instance = new Campfire({
    ssl: true,
    token: "a89c521bdd2c45f0dc9dc3651420289549a08900",
    account: "blakeanderson"
  });
  room_id = 427831;
  instance.join(room_id, function(error, room) {
    console.log("Joining room");
    return room.listen(function(message) {
      var task, _i, _len, _ref, _results;
      _ref = [Commands];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        task = _ref[_i];
        _results.push(task.listen(message, room));
      }
      return _results;
    });
  });
}).call(this);
