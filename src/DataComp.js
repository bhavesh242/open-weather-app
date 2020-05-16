import InputSearch from './InputSearch';
import React from 'react';
import Geolocation from './Gelocation';
import Switch from 'react-switch';
class DataComp extends React.Component
{
  state = {checked:false, data:[]}

  parentCallBackFunct = (data) =>{
    this.setState({data});
    console.log(data);
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
      </div>

    )
  }
}



export default DataComp;