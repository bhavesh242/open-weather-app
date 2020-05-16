import React from 'react'

class Geolocation extends React.Component{
    state = {
        lat: 0.0,
        long:0.0,
        data: [],
        loading: false,
      }
      componentDidMount(){  
        if ("geolocation" in navigator){
          console.log("Available");
          navigator.geolocation.getCurrentPosition((position)=>{
            console.log("Latitiude:",position.coords.latitude);
            console.log("Longitude:",position.coords.longitude);
            this.setState({lat: position.coords.latitude, long: position.coords.longitude});
          });
          this.setState({loading:true});
          fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+this.state.lat+'&lon='+this.state.long+'&units=metric&appid=69c4928e7eaf7c363ff44bf422b8b7e4')
          .then(data=> data.json())
          .then(data=> this.setState({data: data, loading: false})).then(data=> this.props.getData(this.state.data));  
        }
        else{
          console.log("Unavailable");
        }
      }

      render(){
            
        return (
          <div>
            <h3>{this.state.lat? <p>Latitiude: {this.state.lat}</p>:""}</h3>
            <h3>{this.state.long? <p>Longitude: {this.state.long}</p>:""}</h3>
          </div>
        )
      }
}

export default Geolocation;