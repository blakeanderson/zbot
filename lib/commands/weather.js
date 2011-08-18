(function() {
  var getWeatherData, http;
  http = require('http');
  getWeatherData = function() {
    var options;
    options = {
      host: 'api.wunderground.com',
      port: 80,
      path: '/auto/wui/geo/GeoLookupXML/index.xml?query=68922'
    };
    return http.get(options, function(res) {
      return console.log(res);
    });
  };
  exports.execute = function() {
    getWeatherData();
    return "hello world";
  };
}).call(this);
