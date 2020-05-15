import React from 'react';
import ReactDOM from 'react-dom';


class WeatherApp extends React.Component
{
  render(){
    return (
      <p>Hello</p>
    )
  }
}

ReactDOM.render(
  <WeatherApp />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
