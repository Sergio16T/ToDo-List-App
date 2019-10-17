import React from 'react';
import { motion } from 'framer-motion'; 
import Button from './button'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [{text: 'Schedule meeting with senior developer', id: Date.now()}, {text: 'Become a Javascript Ninja', id: Date.now()}], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const styles = {
      background: "#7fffd4",
      borderRadius: 30,
      width: 100, 
      padding: "10px 20px",
      margin: "0px 10px",
      color: "#333",
      outline: "none",
      border: "none",
      cursour: "pointer"
    };
    return (
      <div>
        <h3>To Do List</h3>
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
}

function TodoList(props) {
    return (
      <ul>
        {props.items.map((item, index) => (
          <div key = {`${index}a`} className ='itemContainer'>
          <li className ='listItems' key={item.id}>{item.text}</li>
          <Button index ={index}></Button>
          </div>
        ))}
      </ul>
    );
  
}

export default App;


