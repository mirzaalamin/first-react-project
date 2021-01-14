import React, { Component } from 'react';
import '../stylesheets/Newcom.css';
// function Component
// function Newcom(props) {
//     return (
//         <div><p>Name: {props.name} Age: {props.age}</p></div>
//     );
// }

//class Component

class Newcom extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const style = {
            color: "green",
            padding: "10px 30px",
            borderRadius: "5px"
        }
        return (
            <div>
                <p onClick={this.props.change}>Name: {this.props.name} Age: {this.props.age}</p>
                <input type="text" style={style} onChange={this.props.buttonType} />
            </div >
        );
    }
}

export default Newcom;