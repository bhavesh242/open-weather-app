import React from 'react';
import DataComp from './DataComp'
import TodayWeather from './TodayWeather'
import ForeCast from './ForeCast'
class WeatherApp extends React.Component
{
  render(){
    return (
      <div>
        <DataComp />
        <TodayWeather />
        <ForeCast />
      </div>

    )
  }
}

export default WeatherApp;