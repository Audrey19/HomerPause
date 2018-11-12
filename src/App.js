import React, { Component } from "react";
import "./App.css";

import DisplayCharacter from "./DisplayCharacter";
import GenerateCharacter from "./GenerateCharacter";
import Lamp from "./Lamp";

const  sampleCharacter =
  {
   quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
   character: "Nelson Muntz",
   image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  };
       

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson : sampleCharacter
    };
  }
  
  handleClick = () => {
  this.setState({working: !this.state.working });
  };

  getCharacter() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
          simpson:  data[0],
        });
    });
  }

  render() {
    const light = this.state.working ? 'pause' : 'travail';
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <div className="">
        <button onClick={this.handleClick} className={light}>{light.toUpperCase()}</button>
        <figure className={light} />
      </div>
        <Lamp on />
        <Lamp />
        <GenerateCharacter  selectCharacter={() =>  this.getCharacter()}  />
        <DisplayCharacter  simpson={this.state.simpson}  />
      </div>
    );
  }

}

export default App;
