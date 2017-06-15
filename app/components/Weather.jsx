var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(city, forecast7) {
    this.setState({isLoading: true});
    openWeatherMap.getForecast(city).then((data) => {
      this.setState({
        isLoading: false,
        isForecast7: forecast7,
        data: data
      });
    });
  },
  render: function() {
    var {isLoading, data, isForecast7} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <div className="text-center">Loading...</div>
      } else if(data && isForecast7) {
        return (
          <div className="weather-forecast">
            <h3 className="text-center">7 day forecast for {data.city.name}</h3>
            {data.list.map((item, id) => <WeatherMessage key={id} temp={item.temp.day} icon={item.weather[0].icon}/>) }
          </div>
        );
      } else if(data) {

        return (
          <div className="weather-forecast">
            <h3 className="text-center">Today weather for {data.city.name}</h3>
            <table className="stack">
              <tr>
                <td>Weather:</td>
                <td><img src={`http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`}/></td>
              </tr>
              <tr>
                <td>Temperature:</td>
                <td>{data.list[0].temp.min} - {data.list[0].temp.max} &#8451;</td>
              </tr>
              <tr>
                <td>Pressure:</td>
                <td>{data.list[0].pressure}</td>
              </tr>
              <tr>
                <td>Humidity:</td>
                <td>{data.list[0].humidity}</td>
              </tr>
              <tr>
                <td>Wind speed:</td>
                <td>{data.list[0].speed}</td>
              </tr>
            </table>
          </div>
        );
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
