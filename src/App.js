import React from 'react';
import './App.css';
import Login from "./components/Login.js"

class App extends React.Component {
  render (){
    return(
      <div className="App">
        <header className="App-header">
          <h5>JeoParody Test</h5>
          <Login />
        </header>
      </div>
    )
    
  }
}

export default App;
