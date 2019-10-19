import React  from 'react';
import './modalBox.css';

class ModalBox extends React.Component {

    render() {
        return (
            <div className = {this.props.className}>
                <div className="modal-container">
                <form id="modal-form">
                    <header id="modal-header">
                        <p id="header-message">Add Project</p>
                    </header>
                    <section>
                        <div className ="form-field">
                            <label htmlFor ="project-name-add">Project name</label>
                            <input onChange ={this.props.handleProjectInput} id="project-name-add" name="name" value ={this.props.text}></input>
                        </div>
                        <div className ="form-field">
                            <label htmlFor ="project-priority-add">Priority</label>
                            <input onChange ={this.props.handlePriorityInput} id="project-priority-add" name="priority" value={this.props.priorityText}></input>
                        </div>
                    </section>
                    <footer id ="modal-footer">
                        <button type="button" onClick ={this.props.buttonMethod} id="modal-cancel">Cancel</button>
                        <button type ="button" onClick ={this.props.submitMethod} id ="modal-submit">Add</button>
                    </footer>
                </form>
                </div>
            </div>
        )
    }
}

export default ModalBox; 