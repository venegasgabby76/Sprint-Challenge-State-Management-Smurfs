import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./smurfForm";
import SmurfList from "./smurfList"



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HELLO AND WELCOME TO THE SMURFS</h1>
        <p>You may recognize us from your childhood and we are so happy to have you all here with us.</p>
        <p>Here at smurf farms we love when we have new guest and we hope that you join all of us.</p>
        <p>Please feel free to join us by filling out your information.</p>
  
        <>
        <SmurfForm />
        <SmurfList />
      </>
      </div>
    );
  }
}

export default App;


// things that i have to do for the project.
//I will need to have a few other files in the components. this will include a form to add smurfs, an actual smurf file (which will take in the smurf data) and then a smurf list( this will be what gets mapped over everytime we want to add a new smurf to the list) 
//i will need to add to my reducer folder. i need to have a fetch (start, success,and fail) as well as an add(success and fail.)
//i need to create an actions folder which will host both my get and pull request for the project. 