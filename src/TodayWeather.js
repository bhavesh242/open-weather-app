import React from 'react';
var moment = require('moment');

class TodayWeather extends React.Component {
    
    render() {
        let newDate = new Date();
        const weekday = this.props.today.datetime * 1000
        newDate.setTime(weekday)
        var weather_map={
            'Snow':'snow',
            'Rain':'rain',
            'Clouds':'clouds',
        }
        console.log(weather_map)
        console.log(this.props.today)
        return (
            <div class="row">
            <div class="col-md-12 col-md-offset-12">
            <div className={"jumbotron weather " + weather_map[this.props.today.weather]}>
            <h2 class="current-temp"> {this.props.today.temp}°F</h2>
            <h3 className="card-title current-day">{moment(newDate).format('dddd')}, <span className="text-muted current-date">{moment(newDate).format('MMMM Do, h:mm a')}</span></h3>
            <i className={"owf owf-"+this.props.today.icon+" owf-5x current-icon"}  ></i>
            <div className="card-body current-weather">
                <p className="card-text">{this.props.today.weather}</p>
            </div>                
            
            <p className="text-muted current-desc">{this.props.today.description}</p>

            </div>  
            </div>  
            </div>

        )
    }
}




export default TodayWeather;