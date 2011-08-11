(function() {
  var Campfire, instance, room_id;
  Campfire = require("./lib/vendor/campfire").Campfire;
  instance = new Campfire({
    ssl: true,
    token: "a89c521bdd2c45f0dc9dc3651420289549a08900",
    account: "blakeanderson"
  });
  room_id = 427831;
  instance.join(room_id, function(error, room) {
    console.log("Joining room");
    return room.listen(function(message) {
      if (message.body === "PING") {
        console.log("PING received");
        return room.speak("PONG", function(error, response) {
          return console.log("PONG sent at" + response.message.created_at + ".");
        });
      } else {
        return console.log("Received unknown message");
      }
    });
  });
}).call(this);
