import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./smurfForm";



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
      </div>
    );
  }
}

export default App;


// things that i have to do for the project.
//I will need to have a few other files in the components. this will include a form to add smurfs, an actual smurf file (which will take in the smurf data) and then a smurf list( this will be what gets mapped over everytime we want to add a new smurf to the list) 
//i will need to add to my reducer folder. i need to have a fetch (start, success,and fail) as well as an add(success and fail.)
//i need to create an actions folder which will host both my get and pull request for the project. 