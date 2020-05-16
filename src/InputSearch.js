import React from 'react';
 


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
            fetch('http://api.openweathermap.org/data/2.5/forecast?q='+ this.state.city+'&appid=69c4928e7eaf7c363ff44bf422b8b7e4')
            .then(data => data.json())
            .then(data => this.setState({data:data}))
            .then(data => this.props.getData(this.state.data))
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.fetchWeather} >
                    <input id = "city" onChange={this.changeHandler} type="text" />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )   
    }
}
export default InputSearch;