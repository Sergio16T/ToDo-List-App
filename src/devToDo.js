import React from 'react';
import App from './App'; 

class DevToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [{text: 'Schedule meeting with senior developer', id: Date.now()}, {text: 'Become a Javascript Ninja', id: Date.now()}], text: '' };
      }
    render() {
        return (
            <App items ={this.state.items}></App>
        )
    }
}

export default DevToDo; 