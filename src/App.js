import logo from './logo.svg';
import './App.css';
import Newcom from './Components/Newcom';
import Book from './Components/Book';
import React, { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//   </a>

//         <Newcom name="Alamin" age="21" />
//         <Newcom name="Mirza" age="22" />
//       </header>
//     </div>
//   );

//   // return React.createElement("div", { className: "App" }, React.createElement("header", { className: "App-header" }, < img src={logo} className="App-logo" alt="logo" />, <p>Edit <code>src/App.js</code> and save to reload.</p>, <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>, <Newcom />));
// }

// class component
class App extends Component {
  state = {
    infos: [
      { name: "Alamin", age: 21 },
      { name: "Mirza", age: 22 }
    ],
    BookInfo: [
      { id: 1, bookname: "Rich dad poor dad", writer: "Henry" },
      { id: 2, bookname: "10 ways to get rich", writer: "Mike" },
      { id: 3, bookname: "The House", writer: "David" }
    ],
    showBook: true
  }

  // change state with click
  changeState = (newinfo) => {
    this.setState({
      infos: [
        { name: "Atif", age: 32 },
        { name: newinfo, age: 30 }
      ]
    });
  }
  // change state with input change
  changeStateWithInput = (e) => {
    this.setState({
      infos: [
        { name: "Atif", age: 32 },
        { name: e.target.value, age: 30 }
      ]
    });
  }
  deleteBook = (index) => {
    const books = this.state.BookInfo.slice();
    books.splice(index, 1);
    this.setState({
      BookInfo: books
    })
  }
  changeTitle = (event, index) => {
    const book = { ...this.state.BookInfo[index] };
    book.bookname = event.target.value;

    const books = [...this.state.BookInfo];
    books[index] = book;
    this.setState({
      BookInfo: books
    })

  }

  bookToggle = () => {
    this.setState({
      showBook: !this.state.showBook
    })
  }

  render() {
    let book = null;
    if (this.state.showBook) {
      const books = this.state.BookInfo;
      book = books.map((item, index) => {
        return (
          <Book
            bookname={item.bookname}
            writer={item.writer}
            delete={() => this.deleteBook(index)}
            key={item.id}
            change={(event) => this.changeTitle(event, index)} />
        );

      })
    }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Person List</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => { this.changeState("jams bond") }}>Change state</button>
          <Newcom name={this.state.infos[0].name} age={this.state.infos[0].age} />
          <Newcom name={this.state.infos[1].name} age={this.state.infos[1].age} change={this.changeState.bind(this, "Tom Cruise")} buttonType={this.changeStateWithInput} />
          <h1 className="title">Book List</h1>
          <button onClick={this.bookToggle}>Book Toggle</button>
          {/* <Book bookName={this.state.BookInfo[0].bookname} writer={this.state.BookInfo[0].writer} /> */}
          {/* {this.state.showBook ? book : null} */}
          {book}
        </header>
      </div>
    );
  }
}


export default App;
