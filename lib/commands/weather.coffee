http = require('http')
$ = require('jquery')
request = require('request')

exports.execute = (callback) ->
	request(
		{uri: 'http://api.wunderground.com/auto/wui/geo/ForecastXML/index.xml?query=Denver,CO' }
		(error, response, body) ->
			if error and response.statusCode != 200
				return callback "error connecting to the weather underground api", ""
			weatherReport = ""
			$(body).find('txt_forecast').each () ->
				$(this).find('forecastday').each () ->
					weatherReport += $(this).find('title').text() + "\n"
					weatherReport += $(this).find('fcttext').text() + "\n"
					weatherReport += "------------------------------------"
			callback("", weatherReport)
	)	
