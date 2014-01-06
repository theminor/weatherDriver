module.exports = [
    {
        name: 'Weather Current Temperature',
        deviceId: 9,
        data: [function(weatherDataToParse, useFahrenheit) {
			if (useFahrenheit) {
				return weatherDataToParse.current_observation.temp_f;
			}
			else {
				return weatherDataToParse.current_observation.temp_c;
			}
        }],
		canSet: false,
    },
];

/*
	name: string - the name of the device
	deviceId: number - the device id of the device - see http://ninjablocks.com/pages/device-ids
	data: function to call which will return parsed date when given ((json object)weatherDataToParse, (bool)useFahrenheit) as arguments
	canSet: boolean - set to true if device is writable
	setStg: a function to call if device is writable upon write which will return a string of the command to execute, given ((string)apiKey, (string)val) as arguments
*/
