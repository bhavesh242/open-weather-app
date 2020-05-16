import React from 'react';
import './index.css'


class InputSearch extends React.Component{
    
    state = {
        city:"",
        data:[],
    }

    changeHandler = e =>{
        this.setState({city : e.target.value });
    }
    fetchWeather = e => {
        e.preventDefault();
        if(! (this.state.city === "" || this.state.city === null || this.state.city === undefined))
        {
            fetch('http://api.openweathermap.org/data/2.5/forecast?q='+ this.state.city+'&units=metric&appid=69c4928e7eaf7c363ff44bf422b8b7e4')
            .then(data => data.json())
            .then(data => this.setState({data:data}))
            .then(data => this.props.getData(this.state.data))
        }
    }
    render(){
        return(
            <div class="search-body">
                <form onSubmit={this.fetchWeather} class="find-location">
                    <input id = "city" placeholder="Enter Location" onChange={this.changeHandler} type="text" />
                    <input id="submit" type="submit"  value="submit" />
                </form>
            </div>
        )   
    }
}
export default InputSearch;