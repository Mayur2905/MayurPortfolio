import React from "react";
import { Component } from "react";
import Counter from "./components/Counter";
import Greet from "./components/Greet";

class App extends Component {
  render (){
  return (
      <div className="App">
        {/* <Counter/> */}
        <Greet name="Diana" heroName = "Wonder Woman"/>
      </div>
    );
  }
}

export default App;
