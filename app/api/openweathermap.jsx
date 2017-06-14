var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8ebb8f2092869f41f92acca1ddc6ee6b&units=metric';

module.exports = {
  getTemp: function(city) {
    var encodedCity = encodeURIComponent(city);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedCity}`;

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        var data = {
          temp: res.data.main.temp,
          icon: res.data.weather[0].icon
        }
        return data;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
}
