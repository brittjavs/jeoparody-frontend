import React from 'react';
import './App.css';
import NavBar from "./containers/NavBar"
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser"
import Game from "./containers/Game"
// import { withRouter } from 'react-router-dom'


class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }
  
  render (){
    return(
      <div className="App">
        <header className="App-header">
          <h5>JeoParody Test</h5>
          <NavBar />
        </header>
        <main>
          <div className="game-container">
            <Game />
          </div>
        </main>
      </div>
    )
    
  }
}

export default connect(null, {getCurrentUser})(App)
