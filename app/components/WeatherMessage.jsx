var React = require('react');

var WeatherMessage = ({temp, location}) => {
  // var {temp, location} = props;

  return (
    <h3>It's it {temp} °F in {location}.</h3>
  )
}

module.exports = WeatherMessage;
