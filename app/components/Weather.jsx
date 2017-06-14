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
  handleSearch: function(city) {
    this.setState({isLoading: true});

    openWeatherMap.getTemp(city).then(({temp, icon}) => {
      this.setState({
        city: city,
        temp: temp,
        icon: icon,
        isLoading: false
      });
    }, (errorMessage) => {
      this.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render: function() {
    console.log(this.state);
    var {city, temp, icon, isLoading} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <div className="text-center">Loading...</div>
      } else if (city && temp) {
        return <WeatherMessage city={city} temp={temp} icon={icon}/>
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
