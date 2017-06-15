var React = require('react');

var About = (props) => {
  return (
    <div>
      <h3 className="text-center">About</h3>
      <p className="lead">Single page weather app powered by ReactJS.</p>
      <small className="float-right">Developed by <a target="_blank" href="http://maxim-larkin.ru">Maxim Larkin</a>.</small>
    </div>
  );
}

module.exports = About;
