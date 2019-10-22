import React from 'react';
import ModalBox from './modalBox'; 
import {Link} from 'react-router-dom'; 
import './navSideBar.css'; 
import './modalBox.css'; 


class NavSideBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            projects: [{projectTitle: 'Welcome', id: Math.random(), path: "/"},{projectTitle: 'Development', id: Math.random(), path: "/devToDo"}, {projectTitle: 'Personal', id: Math.random(), path: "/personal" }],
            rightArrowClassName: 'right-arrow',
            projectListClassName: 'project-list',
            modalBoxClassName: 'modalBox inactive',
            text: '',
            priorityText: '',
            responsive: this.props.responsive
         
        }
        this.rotateArrow = this.rotateArrow.bind(this); 
        this.openModal = this.openModal.bind(this); 
        this.cancelModal = this.cancelModal.bind(this); 
        this.addProject = this.addProject.bind(this);
        this.handleProjectInput = this.handleProjectInput.bind(this);
        this.handlePriorityInput = this.handlePriorityInput.bind(this); 
        this.setResponsive = this.setResponsive.bind(this); 


    }
     _isMounted  = false; 
    componentDidMount(){
        this._isMounted= true; 
        window.addEventListener('click', this.setResponsive.bind(this));
        window.addEventListener('resize', this.setResponsive.bind(this));
        window.addEventListener('load', this.setResponsive.bind(this));
        

    }
    componentWillUnmount(){
        this._isMounted = false; 
        window.removeEventListener('click', this.setResponsive.bind(this));
        window.removeEventListener('resize', this.setResponsive.bind(this));
        window.removeEventListener('load', this.setResponsive.bind(this));
         
         
    } 
    
    setResponsive(){
        if(this._isMounted) {
        this.setState({
            responsive: this.props.responsive
        }); 
    }
    }
    

    rotateArrow() {
        if (this.state.rightArrowClassName === 'right-arrow'){
            this.setState({
                rightArrowClassName: 'right-arrow rotate',
                projectListClassName: 'project-list-active'
            }); 
        } else {
            this.setState({
                rightArrowClassName: 'right-arrow',
                projectListClassName: 'project-list'
            });
        } 
    }
    openModal() {
        this.setState({
            modalBoxClassName: 'modalBox',
        }); 
    }
    cancelModal() {
        this.setState({
            modalBoxClassName: "modalBox inactive",
        })
    }
    addProject() {
        if (!this.state.text.length | !this.state.priorityText.length) {
            return; 
        }

        const newProject = {
            projectTitle: this.state.text,
            id: Math.random(),
            priority: this.state.priorityText,
            path : '/project'
        }
        this.setState({
            projects: this.state.projects.concat(newProject), 
            text: '',
            priorityText: ''
        });
        this.cancelModal(); 
    }
    handleProjectInput(e){
        this.setState({
            text: e.target.value

        });
    }
    handlePriorityInput(e){
        this.setState({
            priorityText: e.target.value
        }); 
    }
 
    render() {
        return (
            <div className ="navSideBar-wrapper">
            <ModalBox 
                className ={this.state.modalBoxClassName} 
                buttonMethod ={this.cancelModal} 
                submitMethod ={this.addProject}
                handleProjectInput = {this.handleProjectInput}
                handlePriorityInput = {this.handlePriorityInput}
                text = {this.state.text}
                priorityText = {this.state.priorityText}
            />
            <div style ={{display: this.state.responsive ? 'block' : 'none'}} className ='navSideBar-Container'>
                <div className='panel-wrapper'>
                <div className ="expansionPanel">
                    <header id="navSideBar-header">
                        <button className ={this.state.rightArrowClassName} onClick= {this.rotateArrow}>&#8250;</button>
                        <button id="projectsButton">Projects</button>
                        <i onClick = {this.openModal} id="plus" className = 'fas fa-plus'></i>
                    </header>
                    <ul className= {this.state.projectListClassName}>
                        {this.state.projects.map(project => (
                            <Link to ={project.path} key={project.id} onClick={this.props.clickHam}><li className="project-item">{project.projectTitle}</li></Link>
                        ))}
                        
                    </ul>
                </div>
                <div className ="expansionPanel"></div>
                <div className ="expansionPanel"></div>
                </div>
            </div>
            </div>
        )
    }

}

export default NavSideBar; 


//expansionPanel needs it's own component & module reduce lines of codein this module
/* instead of ternary operator in JS for display block or none consider className for that 
DIV and changing reponsive to className this way it works even when devconsole closes*/