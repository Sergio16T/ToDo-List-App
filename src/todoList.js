import React from 'react';
import Button from './button';
import './App.css';


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
export default TodoList; 