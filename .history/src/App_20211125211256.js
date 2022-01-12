import React from "react";
import './App.css'
import { Component } from "react";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

class App extends Component {
  render (){
  return (
      <div className="App">

        {/* <Counter/> */}
        {/* <Welcome/>
        <Greet name="Diana" heroName = "Wonder Woman"/> */}
      </div>
    );
  }
}

export default App;
