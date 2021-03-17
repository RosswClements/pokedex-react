import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokecard 
        id ={4}
        name="Charmander"
        type="fire"
        exp={62}
        />
      </div>

//{id: 4, name: 'Charmander', type: 'fire', base_experience: 62}
    );
  }
}

export default App;
