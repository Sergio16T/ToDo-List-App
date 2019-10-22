import React from 'react'; 
import App from './App'; 
import './App.css';



class Project extends React.Component {
constructor(props) {
    super(props);
    this.state = { 
        items: [{text: 'Welcome! Create a task!', id: Date.now()}], text: ''}
  }
 render() {
     return (
         <App items ={this.state.items}></App>
     )
 }
}

export default Project; 