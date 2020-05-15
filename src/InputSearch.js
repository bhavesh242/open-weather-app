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
        fetch()
        
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