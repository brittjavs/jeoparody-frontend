import React from 'react';
import './App.css';
import Login from "./components/Login.js"
import Logout from "./components/Logout.js"
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser"

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }
  
  render (){
    return(
      <div className="App">
        <header className="App-header">
          <h5>JeoParody Test</h5>
          <Login />
          <Logout/>
        </header>
      </div>
    )
    
  }
}

export default connect(null, {getCurrentUser})(App)
