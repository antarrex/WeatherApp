var React = require('react');

var WeatherMessage = ({temp, icon}) => {
  var src = `http://openweathermap.org/img/w/${icon}.png`;
  return (
    <div className="text-center">
      <div>
        {temp} &#8451; <img src={src}/>
      </div>
    </div>
  );
}

module.exports = WeatherMessage;
