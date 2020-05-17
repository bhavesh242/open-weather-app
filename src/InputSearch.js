import React from 'react';
import './index.css'


class InputSearch extends React.Component{
    
    state = {
        city:"",
        data:[],
        bvisible: false
    }

    changeHandler = e =>{
        
        let vis = false;
        if(! (e.target.value === "" || e.target.value === null || e.target.value === undefined))
        {
            vis = true;
        }
        this.setState({city : e.target.value, bvisible:vis });
        
        
    }
    
    fetchWeather = e => {
        this.props.togglerFunct();
        e.preventDefault();
        if(! (this.state.city === "" || this.state.city === null || this.state.city === undefined))
        {
            fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ this.state.city+'&units=metric&appid=69c4928e7eaf7c363ff44bf422b8b7e4')
            .then(data => data.json())
            .then(data => this.setState({data:data}))
            .then(data => this.props.getData(this.state.data))
        }
    }
    render(){
        return(
            <div class="search-body">
                <form onSubmit={this.fetchWeather} class="find-location">
                    {this.state.bvisible?
                    <input id="submit" type="submit"  value="Search" style={{background:this.state.color}} />
                    :""}
                    <input id = "city" placeholder="Enter Location" onChange={this.changeHandler} type="text" />
                </form>
            </div>
        )   
    }
}
export default InputSearch;