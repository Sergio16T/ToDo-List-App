import React from 'react';
import HomePage from './homePage'; 
import DevToDo from './devToDo'; 
import Personal from './personal'; 
import Project from './newProject'; 
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'; 


class Router extends React.Component {
    render(){
        return (
            <BrowserRouter basename ={process.env.PUBLIC_URL}>
                <Route exact path = "/" component ={HomePage}></Route> 
                <Route path = "/devToDo" component ={DevToDo}></Route>
                <Route path = "/personal" component= {Personal}></Route>
                <Route path = "/project" component = {Project}></Route>    
            </BrowserRouter>

            
        )
    }
}

export default Router; 

