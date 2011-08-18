http = require('http')

getWeatherData = () ->
	options = { 
		host: 'api.wunderground.com',
		port: 80,
		path: '/auto/wui/geo/GeoLookupXML/index.xml?query=68922'
	}
	http.get (options), (res) ->
	 console.log res
	

exports.execute =
	() ->
		getWeatherData()
		return "hello world"