import React from 'react'

class Geolocation extends React.Component{
    state = {
        lat: 0.0,
        long:0.0,
      }
      componentDidMount(){
        if ("geolocation" in navigator){
          console.log("Available");
          navigator.geolocation.getCurrentPosition((position)=>{
            console.log("Latitiude:",position.coords.latitude);
            console.log("Longitude:",position.coords.longitude);
            this.setState({lat: position.coords.latitude, long: position.coords.longitude});
            console.log(this.state);
          });
        }
        else{
          console.log("Unavailable");
        }
      }
    
      render(){
        return (
          <div>
            <p>Hello</p>
            <h3>{this.state.lat? <p>Latitiude: {this.state.lat}</p>:""}</h3>
            <h3>{this.state.long? <p>Longitude: {this.state.long}</p>:""}</h3>
          </div>
        )
      }
}

export default Geolocation;