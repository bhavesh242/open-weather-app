import InputSearch from './InputSearch';
import React from 'react';
import Geolocation from './Gelocation';
class DataComp extends React.Component
{
  state = {data:[]}

  parentCallBackFunct = (data) =>{
    this.setState({data});
  }

  render(){
    return (
      <div>
        <InputSearch getData={this.parentCallBackFunct}/>
        <Geolocation getData={this.parentCallBackFunct}/>
      </div>

    )
  }
}


export default DataComp;