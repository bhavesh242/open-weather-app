import React from 'react';
import './index.css';
var moment = require('moment');
class ForeCast extends React.Component {

    state = { loaded: false };
    componentDidMount() {
        this.setState({ loaded: true });
    }
    render() {
        return (
            <div class="row" style={{ textAlign: "center",paddingTop: "20px" }}>
                {this.state.loaded ? [0, 1, 2, 3].map(
                    (i) => {

                        return (
                            <CardForecast indexNo={i} forecast={this.props.forecast} />
                        )
                    }
                )
                    : ""
                }
            </div>

        )
    }
}

const CardForecast = ({ indexNo, forecast }) => {
    
  let newDate = new Date();
  const weekday = forecast.datetime[indexNo] * 1000
  newDate.setTime(weekday)
    
    return (
        <div class="col-sm-3">
            <div className="card">
                 <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
                <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
                <i className={"owf owf-" + forecast.icon[indexNo] + " owf-5x"}  ></i>
                <p className="text-muted">{forecast.description[indexNo]}</p>
                <h2>{forecast.temp[indexNo]} °C</h2>
                <div className="card-body">
                    <p className="card-text">{forecast.weather[indexNo]}</p>
                </div>
            </div>
        </div>

    )
}


export default ForeCast;