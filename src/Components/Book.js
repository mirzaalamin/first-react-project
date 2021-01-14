import React, { Component } from 'react';
import '../stylesheets/Book.css';

class Book extends Component {
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
            <div className="book">
                <h2 onClick={this.props.delete}>Book: {this.props.bookname}</h2>
                <h3>Writer: {this.props.writer}</h3>
                <input type="text" style={style} onChange={this.props.change} />
            </div>
        )
    }
}

export default Book;