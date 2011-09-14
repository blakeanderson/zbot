(function() {
  var Campfire, Commands, instance, room_id;
  Campfire = require("./lib/vendor/campfire").Campfire;
  Commands = require("./lib/commands");
  instance = new Campfire({
    ssl: true,
    token: "<TOKEN HERE>",
    account: "<ACCOUNT HERE>"
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
