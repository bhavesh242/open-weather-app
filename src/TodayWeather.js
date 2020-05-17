import React from 'react';
var moment = require('moment');

class TodayWeather extends React.Component {
    
    render() {
        var cityName = this.props.city.name ==='Globe'? "Current Location" : this.props.city.name +", "+this.props.city.country;
        return (
            <div>
                {this.props.today.weather === 'Clear'?
                <WeatherClear today={this.props.today} cityName={cityName} />
                : 
                <WeatherOther today = {this.props.today} cityName={cityName} />}
            </div>    
            )
        }
}

class WeatherOther extends React.Component{

    render (){
        let newDate = new Date();
        const weekday = this.props.today.datetime * 1000
        newDate.setTime(weekday)
        var weather_map={
            'Snow':'snow',
            'Rain':'rain',
            'Clouds':'clouds',
        }
        return(
            <div class="row">
                <div class="col-md-12 col-md-offset-12">
                    <div className={"jumbotron weather " + weather_map[this.props.today.weather]}>
                        <h2 class="current-location"> {this.props.cityName}</h2>
                        <h2 class="current-temp"> {this.props.today.temp}°C</h2>
                        <h3 className="card-title current-day">{moment(newDate).format('dddd')}, <span className="current-date">{moment(newDate).format('MMMM Do, h:mm a')}</span></h3>            
                        <p className="current-desc">{this.props.today.description}</p>
                    </div>  
                </div>  
            </div>
        )
    }
}


class WeatherClear extends React.Component{

    render (){
        let newDate = new Date();
        const weekday = this.props.today.datetime * 1000
        newDate.setTime(weekday)
        
        return(
            <div class="row">
                <div class="col-md-12 col-md-offset-12">
                    <div className="jumbotron weather " style={{background:"#aaedf0"}} >
                        
                        <div class="cloud cloudOne"></div>
                        <div class="sun"></div>
                        <h2 class="current-location"> {this.props.cityName}</h2>
                        <h2 class="current-temp"> {this.props.today.temp}°C</h2>
                        <h3 className="card-title current-day">{moment(newDate).format('dddd')}, <span className="text-muted current-date">{moment(newDate).format('MMMM Do, h:mm a')}</span></h3>            
                        <p className="text-muted current-desc">{this.props.today.description}</p>
                    </div>  
                </div>  
            </div>
        )
    }
}


export default TodayWeather;