import InputSearch from './InputSearch';
import React from 'react';
import Geolocation from './Gelocation';
import Switch from 'react-switch';
class DataComp extends React.Component {
  state = {
    checked: false,
    data: [],
    dailyData: {},
  }

  parentCallBackFunct = (data) => {
    const dailyData = data.list.filter(reading => {
      return reading.dt_txt.includes("18:00:00")
    })
    const infArray = {
      temp: [],
      feels_like: [],
      weather: [],
      icon:[],
      datetime: [],
      description: [],
    }
    dailyData.map(
      (t) => {
        infArray.temp.push(t.main.temp);
        infArray.feels_like.push(t.main.feels_like);
        infArray.weather.push(t.weather[0].main);
        infArray.icon.push(t.weather[0].id)
        infArray.description.push(t.weather[0].description);
        infArray.datetime.push(t.dt);
        return infArray;
      }
    )  
    this.setState({ data: data, dailyData: infArray });
    this.props.fillStates(this.state.dailyData)

  }

  handleChange = (checked) => {
    this.setState({ checked });
  }

  render() {
    return (
      <div>

        <label>
          <span>Get Weather for Current Location</span>
          <Switch onChange={this.handleChange} checked={this.state.checked} className="react-switch" />
        </label>
        {this.state.checked === false ?
          <InputSearch getData={this.parentCallBackFunct} /> :
          <Geolocation getData={this.parentCallBackFunct} />}
      </div>

    )
  }
}

export default DataComp;