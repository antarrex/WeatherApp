var React = require('react');

var WeatherMessage = ({city, temp}) => {

  return (
    <p>Its {temp} in {city}</p>
  );
}

module.exports = WeatherMessage;
