import React from 'react';
import Header from './../Header/Header';
import SearchBox from './../SearchBox/SearchBox'
import './App.css'
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            headerTest: 'Name It!',
            headerExpanded : true
        };
    }

    handleInputChange = (inputText) => {
        this.setState({headerExpanded: !inputText })
    }

    render(){
        return(
            <div>
                <Header headerExpanded={this.state.headerExpanded} />
                <SearchBox onInputChange={this.handleInputChange}/>
            </div>
        );
    }
}

export default App;