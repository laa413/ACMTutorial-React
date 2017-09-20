import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import logo from "./logo.svg";
import "./App.css";

var quotes = [
  "Click Me!",
  "Walking on water and developing software from a specification are easy if both are frozen.- Edward V Berard",
  "They don't make bugs like Bunny anymore.- Olav Mjelde.",
  "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.- Eric S. Raymond",
  "When someone says: 'I want a programming language in which I need only say what I wish done', give him a lollipop.- Alan J. Perlis",
  "In theory, theory and practice are the same. In practice, they’re not.- Yoggi Berra",
  "Beware of bugs in the above code; I have only proved it correct, not tried it.- Donald E. Knuth.",
  "First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.- George Carrette"
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
  }

  changeValueRando() {
    var rando = Math.round(Math.random() * 10);
    rando = rando % quotes.length;
    var currentI = this.state.index;
    currentI = rando; //(currentI+1) % quotes.length;
    this.setState({
      index: currentI
    });
  }

  changeValue() {
    var currentI = this.state.index;
    currentI = (currentI + 1) % quotes.length;
    this.setState({
      index: currentI
    });
  }

  render() {
    return <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <h2 className="quote">{quotes[this.state.index]}</h2>
          <button className="button" onClick={() => this.changeValue()}>
            Next (In Order)
          </button>
          <button className="button" onClick={() => this.changeValueRando()}>
            Next (Random)
          </button>
          <h2 className="indexCount">{this.state.index}</h2>
        </div>
      </div>;
  }
}

export default App;