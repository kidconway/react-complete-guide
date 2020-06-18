import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Colby", age: 37 },
      { name: "Brielle", age: 25 },
      { name: "Adam", age: 37 }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Colbylicious", age: 37 },
        { name: "Brielle", age: 25 },
        { name: "Adam", age: 37 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi Im a react app</h1>
        <p>This really works too!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Hobbies: Memes
        </Person>
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   null,
    //   React.createElement("h1", null, "Does this work now?")
    // );
  }
}

export default App;
<qw>wertyuiop[ ]</qw>;
