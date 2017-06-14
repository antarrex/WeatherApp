var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="main-container small-centered medium-5 small-10 columns">
          {props.children}
        </div>
      </div>
    </div>
  )
}

module.exports = Main;
