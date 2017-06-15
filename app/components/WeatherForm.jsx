var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var city = this.refs.city.value;
    var forecast7 = this.refs.forecastType.checked;

    if (city.length > 0) {
      this.props.onSearch(city, forecast7);
    }

  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="city" placeholder="Enter city name"/>
          <div className="switch">
            <input className="switch-input" id="forecastType" type="checkbox" ref="forecastType"/>
            <label className="switch-paddle" htmlFor="forecastType"></label>
          </div>
          <span className="forecast-switcher-text">Get 7 day forecast</span>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
