import React from 'react';
import DataComp from './DataComp'
import TodayWeather from './TodayWeather'
import ForeCast from './ForeCast'
import App from './App'
class WeatherApp extends React.Component {
  state = {
    todayWeather: [],
    forecast: [],
    loaded:false,
    city:[]
  }

  changeLoaded = () =>{
    this.setState({loaded:false});
  }
  parentCallBack = (dailyData, city) => {

    const today = {
      temp: dailyData.temp[0],
      feels_like: dailyData.feels_like[0],
      weather: dailyData.weather[0],
      description: dailyData.description[0],
      icon: dailyData.icon[0],
      datetime: dailyData.datetime[0]
    }

    const forecast = {
      temp: [],
      feels_like: [],
      weather: [],
      icon: [],
      description: [],
      datetime: []
    }

    for (var i = 1; i < 5; i++) {
      forecast.temp.push(dailyData.temp[i]);
      forecast.feels_like.push(dailyData.feels_like[i]);
      forecast.weather.push(dailyData.weather[i]);
      forecast.icon.push(dailyData.icon[i]);
      forecast.description.push(dailyData.description[i]);
      forecast.datetime.push(dailyData.datetime[i]);
    }


    this.setState({ todayWeather: today, forecast: forecast, loaded: true, city:city});

  }

  render() {
    return (
      <div>
        <DataComp fillStates={this.parentCallBack} changeLoaded={this.changeLoaded} />
        {this.state.loaded?<div>
        <TodayWeather today={this.state.todayWeather} city={this.state.city} />
        <ForeCast forecast={this.state.forecast} /></div>
        :<App/>}
      </div>

    )
  }
}

export default WeatherApp;