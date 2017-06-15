var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily?appid=8ebb8f2092869f41f92acca1ddc6ee6b&units=metric';

module.exports = {

  getForecast: function(city) {
    var encodedCity = encodeURIComponent(city);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedCity}`;

    return axios.get(requestUrl).then(res => {
        var data = res.data;
        return data;
    }, res => {
      throw new Error(res.data.message);
    });
  }
}
