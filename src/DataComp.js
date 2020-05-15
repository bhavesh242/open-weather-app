import InputSearch from './InputSearch';
import React from 'react';
import Geolocation from './Gelocation';
class DataComp extends React.Component
{
  render(){
    return (
      <div>
        <InputSearch />
        <Geolocation />
      </div>

    )
  }
}


export default DataComp;