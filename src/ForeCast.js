import React from 'react';
import './index.css';

class ForeCast extends React.Component{

    state = {loaded:false};
    componentDidMount()
    {
        this.setState({loaded:true});
    }
    render(){
        return(
            <div class="row" style={{textAlign:"center"}}>
            {this.state.loaded? [0,1,2,3].map(
                (i)=>{
                    console.log(this.props)
                    return(
                    <div class="col-md-3">
                    <div className="card">
                    <h3 className="card-title">{this.props.forecast.datetime[i]}</h3>
                    <i className={"owf owf-"+this.props.forecast.icon[i]+" owf-5x"}  ></i>
                    <p className="text-muted">{this.props.forecast.description[i]}</p>
                    <h2>{this.props.forecast.temp[i]} °F</h2>
                    <div className="card-body">
                    <p className="card-text">{this.props.forecast.weather[i]}</p>
                    </div>
                    </div>
                    </div>
                )
                }
            ) : console.log(this.props.forecast)}
            </div>
            
        )
    }
}




export default ForeCast;