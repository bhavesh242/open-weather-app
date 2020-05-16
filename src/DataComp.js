import InputSearch from './InputSearch';
import React from 'react';
import Geolocation from './Gelocation';
import Switch from 'react-switch';
class DataComp extends React.Component
{
  state = {
    checked:false, 
    data:[],
    temp:[],
    feels_like:[],
    temp_max:[],
    temp_min:[],
    weather:[],
    datetime:[],
    description:[]
  }

  parentCallBackFunct = (data) =>{
    console.log(data.city.name);
    const dailyData = data.list.filter(reading => {   
      return reading.dt_txt.includes("18:00:00")
    })
    this.setState({data: dailyData});
  }
  
  handleChange = (checked) => {
    this.setState({ checked });
  }

  render(){
    return (
      <div>

        <label>
          <span>Get Weather for Current Location</span>
          <Switch onChange={this.handleChange} checked={this.state.checked} className="react-switch" />
        </label>
        {this.state.checked === false? 
        <InputSearch getData={this.parentCallBackFunct}/> : <Geolocation getData={this.parentCallBackFunct}/> }
        {this.state.data?  
          this.state.data.map(
            (t,i)=>{
            return (
              <div key={i}>
                {this.state.temp.push(t.main.temp)}
                {this.state.feels_like.push(t.main.feels_like)}
                {this.state.temp_max.push(t.main.temp_max)}
                {this.state.temp_min.push(t.main.temp_min)}
                {this.state.weather.push(t.weather[0].main)}
                {this.state.description.push(t.weather[0].description)}
                <p>{this.state.datetime.push(t.dt)}</p>
              </div>  
            ) 
          })
          : ""
        }
        {console.log(this.state.temp)}
        {console.log(this.state.feels_like)}
        {console.log(this.state.temp_min)}
        {console.log(this.state.temp_max)}
        {console.log(this.state.weather)}
        {console.log(this.state.description)}
        {console.log(this.state.datetime)}      
        

      </div>
      
    )
  }
}



export default DataComp;