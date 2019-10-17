import React  from 'react';
import { motion } from 'framer-motion'; 

class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            isToggled: false
        }
        this.setToggle = this.setToggle.bind(this); 
    }
    setToggle() {
            if (!this.state.isToggled) {
            this.setState({
                isToggled: true
                }); 
            } else {
                this.setState({
                    isToggled: false
                }); 
            }   
    }

    render() {
    const styles1 = {
        borderRadius: 30,
        width: 65,
        height: 65,
        padding: 10,
        margin:"auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white", 
        cursor: "pointer"
        }; 
        const variants = {
        active: {
            opacity: 1, 
            background: "#7fffd4",
            x: "-10px",
            scale: 1.25,
        },
        inactive: {
            opacity: 1,
            background: "#f95c5c",
            x: "30px",
            scale: 1,
        }
        };
        return (
            <motion.div
            key = {this.props.index}
            className="toggleButton"
            onClick={() => this.setToggle()}
            style ={styles1}
            animate ={this.state.isToggled ? "active" : "inactive"}
            variants ={variants}
          >
            <span style ={{color: this.state.isToggled ? "#333" : "white"}}>{this.state.isToggled? "Complete" : "Not Complete"}</span>
          </motion.div>
        )
    }
}

export default Button; 