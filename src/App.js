import React from 'react';
import { motion } from 'framer-motion'; 
import NavSideBar from './navSideBar';
import TodoList from './todoList'; 
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { items: [{text: 'Schedule meeting with senior developer', id: Date.now()}, {text: 'Become a Javascript Ninja', id: Date.now()}], text: '' };
    this.state = {
      items: this.props.items,
      text: '',
      responsive: true,
      width: window.innerWidth
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openMenu = this.openMenu.bind(this); 
  }
_isMounted  = false;
componentDidMount() {
  this._isMounted  = true; 
  window.addEventListener('resize', this.updateDimensions.bind(this));
  window.addEventListener('DOMContentLoaded', this.updateDimensions.bind(this)); 
}


componentWillUnmount() {
  this._isMounted = false; 
  window.removeEventListener('resize', this.updateDimensions.bind(this));
  window.removeEventListener('DOMContentLoaded', this.updateDimensions.bind(this)); 
}

  render() {
    const styles = {
      background: "#7fffd4",
      borderRadius: 30,
      width: 100, 
      padding: "10px 20px",
      margin: "0vh 2vh",
      color: "#333",
      outline: "none",
      border: "none",
      cursour: "pointer"
    };
    return (
      <div>
        <div className="app-header">
        <i onClick = {this.openMenu} id ="hamburger" className="fas fa-bars"></i>
        <h3>To Do List</h3>
        </div>
        <div className ="wrapper">
        <NavSideBar responsive ={this.state.responsive} />
        <div className='listContainer'>
        <form onSubmit={this.handleSubmit}>
          <label id= "inputLabel" htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <motion.button 
          style ={styles}
          whileHover ={{scale: 1.1}}
          whileTap ={{scale: 0.9, x: "-5px", y: "5px"}}
          >
            <i className="fas fa-plus"></i>
          </motion.button>
        </form>
        <TodoList items={this.state.items} /> 
        </div>
        </div>
      </div>
    );
  }
  //Sets state of text to input value on change 
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      //prevent's empty text from being added to TO DO
      return;
    }
    const newItem = {
      text: this.state.text, // grabs text from state set by handleChange(e)
      id: Date.now()
    };

    this.setState(state => ({
      items: state.items.concat(newItem), // taking value of state.items and using concat which returns a new array of merged (existing array containing object(s) with addition of new object)
      text: '' // resets to empty string ready for next input to use handleChange(e)
    }));
  }

  updateDimensions =() => {
    if(this._isMounted){
    this.setState({
      width: window.innerWidth
    });
    if (this.state.width < 720){
      this.setState({
        responsive: true  
      });
    }
    if (this.state.width >= 720){
      this.setState({
        responsive: false 
      });
    }
    this.openMenu(); 
  }
  }

  openMenu() {
  
   if(this.state.responsive) {
     this.setState({
       responsive: false
     });
   } else {
     this.setState({
       responsive: true
     });
   }
   if(this.state.width >= 720){
    this.setState({
      responsive: true
    });
  }

  }


}


export default App;


