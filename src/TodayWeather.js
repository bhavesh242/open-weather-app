import React from 'react';


class TodayWeather extends React.Component {
    
    render() {
        console.log(this.props.today)
        return (
            <div class="row">
            <div class="col-md-4 col-md-offset-4">
            <div className="card">
                <h3 className="card-title">{this.props.today.datetime}</h3>
                <i className={"owf owf-"+this.props.today.icon+" owf-5x"}  ></i>
                <p className="text-muted">{this.props.today.description}</p>
                <h2>{this.props.today.temp} °F</h2>
                <div className="card-body">
                    <p className="card-text">{this.props.today.weather}</p>
                </div>
            </div>  
            </div>  
            </div>

        )
    }
}




export default TodayWeather;